import { injectable } from 'inversify';
import 'reflect-metadata';
import { Stage } from '../interfaces/stage.interface';
import { Pack } from '../interfaces/pack.interface';
import * as yaml from 'js-yaml';
import * as fs from 'fs';
import Fuse from 'fuse.js';

@injectable()
export class StageService {
    private files: string[];

    private stageList: Stage[] = [];
    private stageFuse: Fuse<Stage>;

    private packList: Pack[] = [];
    private packFuse: Fuse<Pack>; // alias

    public init() {
        this.loadPack('stardust');

        this.stageFuse = new Fuse(this.stageList, {
            includeScore: true,
            threshold: 0.3,
            keys: ['name'],
        });
    }
    // Find a stage
    public getStageMatches(name: string): Stage[] {
        console.log(this.stageList);
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

    private loadPack(file: string): void {
        const info: any = yaml.load(
            fs.readFileSync(`content/${file}.yml`, 'utf8')
        );
        info.story.forEach((stage, index) => {
            this.stageList.push({
                name:  Object.keys(stage)[0],
                slot: `${Math.floor(index / 10) + 1}-${(index % 10) + 1}`,
                pack: 'stardust',
                hasBlue: true,
                hasGreen: false,
                hasRed: true,
            });
        });

        this.packList.push(info.name);
    }
}
