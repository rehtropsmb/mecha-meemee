import { injectable } from 'inversify';
import 'reflect-metadata';
import { Stage } from '../interfaces/stage.interface';
import { Pack, PackAlias } from '../interfaces/pack.interface';
import * as yaml from 'js-yaml';
import * as fs from 'fs';
import Fuse from 'fuse.js';

@injectable()
export class StageService {
    private stageList: Stage[] = [];
    private stageFuse: Fuse<Stage>;

    private packList: Pack[] = [];

    private packAliasList: PackAlias[] = [];
    private packFuse: Fuse<PackAlias>; // alias

    private THRESHOLD = 0.35;

    private files: string[] = ['stardust'];

    public init() {
        for (const file of this.files) {
            this.loadPack(file);
        }

        this.stageFuse = new Fuse(this.stageList, {
            includeScore: true,
            threshold: this.THRESHOLD,
            keys: ['name'],
        });

        this.packFuse = new Fuse(this.packAliasList, {
            includeScore: true,
            threshold: this.THRESHOLD,
            keys: ['alias'],
        });

        console.log(
            `Loaded ${this.stageList.length} stages from ${this.packList.length} packs.`
        );
    }
    // Find a stage
    public getStageMatches(name: string): Stage[] {
        const results = this.stageFuse.search(name);
        const stages: Stage[] = [];

        let matchFound = false;
        results.forEach((result) => {
            // if exact match, return ONLY exact matches
            if (result.item.name.toLowerCase() === name.toLowerCase()) {
                stages.push(result.item);
                matchFound = true;
            } // if multiple similar, list until limit
            else if (!matchFound) {
                stages.push(result.item);
            }
        });

        return stages.splice(0, 5);
    }

    public getPackByName(name: string): Pack {
        let result = null;
        this.packList.forEach((pack) => {
            if (pack.name === name) {
                result = pack;
            }
        });
        return result;
    }

    private loadPack(file: string): void {
        const info: any = yaml.load(
            fs.readFileSync(`content/${file}.yml`, 'utf8')
        );

        const packname = info.name;
        if (packname) {
            this.packList.push({
                name: packname,
                fullname: info.fullname ? info.fullname : packname,
                srcname: info.srcname,
                creator: info.creator ? info.creator : 'Unknown Creator',
                download: info.download,
                video: info.video,
                image: info.image,
                ilsheet: info.ilsheet,
                srcpage: info.srcpage,
                description: info.description
                    ? info.description
                    : 'No description',
                sheetid: info.sheetid,
                release: info.release,
                stagecount: {},
                pracModCompatible: info.pracModCompatible ?? 3,
                gameId: info.gameId ? info.gameId : 'Unknown ID',
                elite: info.elite,
            });

            this.packAliasList.push({
                alias: packname.toLowerCase(),
                real: packname,
            });

            if (info.fullname) {
                if (
                    this.packAliasList
                        .map((pack) => pack.alias.toLowerCase())
                        .includes(info.fullname.toLowerCase())
                ) {
                    throw new Error(
                        `Cannot re-register alias of ${info.fullname} from ${packname}.`
                    );
                }
                this.packAliasList.push({
                    alias: info.fullname.toLowerCase(),
                    real: packname,
                });
            }

            if (info.alias) {
                info.alias.forEach((title) => {
                    if (
                        this.packAliasList
                            .map((pack) => pack.alias)
                            .includes(title)
                    ) {
                        throw new Error(
                            `Cannot re-register alias of ${title} from ${packname}.`
                        );
                    }
                    this.packAliasList.push({
                        alias: title.toLowerCase(),
                        real: packname,
                    });
                });
            }
        }

        this.loadStoryCategory(info.story, packname);
        // 20 stage story in dx
        this.load20StoryCategory(info.story20, packname);
        // challenge modes
        this.loadChallengeCategory(info.b, 'B', packname);
        this.loadChallengeCategory(info.bx, 'BX', packname);
        this.loadChallengeCategory(info.a, 'A', packname);
        this.loadChallengeCategory(info.ax, 'AX', packname);
        this.loadChallengeCategory(info.e, 'E', packname);
        this.loadChallengeCategory(info.ex, 'EX', packname);
        this.loadChallengeCategory(info.m, 'M', packname);
        this.loadChallengeCategory(info.mx, 'MX', packname);
        // infernal in bbr
        this.loadChallengeCategory(info.i, 'I', packname);
    }

    private addStage(
        stage: string | object,
        cat: string,
        packname: string,
        num: string
    ): void {
        if (stage === '(empty)') {
            return;
        }
        let pack = this.getPackByName(packname);
        if (!pack.stagecount[cat]) {
            pack.stagecount[cat] = 1;
        } else {
            pack.stagecount[cat]++;
        }

        if (typeof stage === 'string') {
            this.stageList.push({
                name: stage,
                cat: cat,
                num: num,
                pack: packname,
                hasBlue: true,
                hasGreen: false,
                hasRed: false,
                isBonus: false,
                tourneyBan: false,
            });
        } else {
            const name = Object.keys(stage)[0];
            if (!name) {
                return;
            }

            const lacksBlueGoal = stage[name].includes('lacksBlueGoal');
            const hasGreenGoal = stage[name].includes('hasGreenGoal');
            const hasRedGoal = stage[name].includes('hasRedGoal');
            const isBonus = stage[name].includes('isBonus');
            const tourneyBan = stage[name].includes('tourneyBan');

            const toAdd: Stage = {
                name: name,
                cat: cat,
                num: num,
                pack: packname,
                hasBlue: !lacksBlueGoal,
                hasGreen: hasGreenGoal,
                hasRed: hasRedGoal,
                isBonus: isBonus,
                tourneyBan: tourneyBan,
            };

            this.stageList.push(toAdd);
        }
    }

    private loadChallengeCategory(
        list: string[] | undefined,
        cat: string,
        packname: string
    ): void {
        if (list) {
            let count = 1;
            list.forEach((stage) => {
                this.addStage(stage, cat, packname, String(count));
                count++;
            });
        }
    }

    private loadStoryCategory(
        list: string[] | undefined,
        packname: string
    ): void {
        let storyCount = 0;
        if (list) {
            list.forEach((stage) => {
                this.addStage(
                    stage,
                    'Story',
                    packname,
                    String(
                        Math.floor(storyCount / 10 + 1) +
                            '-' +
                            ((storyCount % 10) + 1)
                    )
                );
                storyCount++;
            });
        }
    }

    private load20StoryCategory(
        list: string[] | undefined,
        packname: string
    ): void {
        let storyCount = 0;
        if (list) {
            list.forEach((stage) => {
                this.addStage(
                    stage,
                    'Story',
                    packname,
                    String(
                        Math.floor(storyCount / 20 + 1) +
                            '-' +
                            ((storyCount % 20) + 1)
                    )
                );
                storyCount++;
            });
        }
    }
}
