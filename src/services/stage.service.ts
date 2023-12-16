import { injectable } from 'inversify';
import 'reflect-metadata';
import { Stage } from '../interfaces/stage.interface';
import { Pack } from '../interfaces/pack.interface';
import * as yaml from 'js-yaml';
import * as fs from 'fs';
import Fuse from "fuse.js";

@injectable()
export class StageService {

    private files: string[];

    private stageList: Stage[] = [];
    private stageFuse: Fuse<Stage>;

    private packList: Pack[] = [];
    private packFuse: Fuse<Pack>; // alias

    public init() {
        this.loadPack('stardust')
    }
    
    private loadPack(file: string): void {
        const info: any = yaml.load(fs.readFileSync(`content/${file}.yml`, 'utf8'));
        info.story.forEach((stage, index) => {
            this.stageList.push({
                name: stage,
                slot: `${(index/10)+1}-${(index%10)+1}`,
                pack: 'stardust',
                hasBlue: true,
                hasGreen:false,
                hasRed: true,
                isBonus: false,
                tourneyBan: false
            });
        });
    }
}
