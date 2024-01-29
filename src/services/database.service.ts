import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { EnvService } from './env.service';
import { DataTypes, Sequelize } from 'sequelize';
import * as yaml from 'js-yaml';
import * as fs from 'fs';
import Fuse from 'fuse.js';

const files = [
    'stardust',
    'gaiden',
    '651',
    'invasion',
    'launch',
];

@injectable()
export class DatabaseService {
    private envService: EnvService;
    constructor(@inject(EnvService) envService) {
        this.envService = envService;
    }

    private sequelize;
    private Pack;
    private Stage;
    private Battle;

    public async init(): Promise<void> {
        this.sequelize = new Sequelize(this.envService.databaseUrl, {
            logging: false,
        });

        try {
            await this.sequelize.authenticate();
            console.log('Database connection established!');
        } catch (error) {
            console.log(error);
            console.log('DATABASE ERROR!');
        }

        await this.initModels();
        // await this.recreateTables();

        for (const f of files) {
            // await this.loadPack(f);
        }
    }

    public async getPackByName(name: string) {
        const packList: any[] = (await this.getAllPacks());
        const packFuse = new Fuse(packList, {
            includeScore: true,
            threshold: 0.35,
            keys: ['name'],
        });
        const results = packFuse.search(name);

        let pack = null;
        for (const r of results) {
            if (r.item.name.toLowerCase() === name.toLowerCase()) {
                pack = r.item;
                break;
            }
        }

        return pack;
    }

    private async getPackById(id: number) {
        return (await this.Pack.findAll({
            where: {
                id: id,
            },
        }))
    }

    private async getAllPacks() {
        return (await this.Pack.findAll()).map(r => r.dataValues);
    }

    public async getAllStageNames() {
        return (await this.Stage.findAll({
            attributes: ['id', 'name'],
        })).map((r => r.dataValues.name));
    }

    public async getPackStages(id: number) {
        return (await this.Stage.findAll({
            where: {
                pack_id: id,
            },
        })).map((r => r.dataValues));
    }

    private async recreateTables() {
        await this.Pack.sync({ force: true });
        await this.Stage.sync({ force: true });
    }

    private async loadPack(file: string): Promise<void> {
        const info: any = yaml.load(
            fs.readFileSync(`content/${file}.yml`, 'utf8')
        );
        const pack = (
            await this.Pack.create({
                name: info.name,
                abb: info.abb,
                download: info.download,
                release: info.release,
            })
        ).toJSON();

        const stageList = [];
        if (info.story) {
            for (const s of info.story) {
                if (s === '(empty)') {
                    return;
                } else if (typeof s === 'string') {
                    stageList.push({
                        pack_id: pack.id,
                        name: s,
                        category: 'Story',
                        has_blue: true,
                        has_green: false,
                        has_red: false,
                    });
                } else {
                    const name = Object.keys(s)[0];
                    const lacksBlueGoal = s[name].includes('lacksBlueGoal');
                    const hasGreenGoal = s[name].includes('hasGreenGoal');
                    const hasRedGoal = s[name].includes('hasRedGoal');

                    stageList.push({
                        pack_id: pack.id,
                        name: name,
                        category: 'Story',
                        has_blue: !lacksBlueGoal,
                        has_green: hasGreenGoal,
                        has_red: hasRedGoal,
                    });
                }
            }
            return await this.Stage.bulkCreate(stageList);
        }
    }

    private async initModels() {
        this.Pack = this.sequelize.define(
            'Pack',
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                abb: {
                    type: DataTypes.STRING,
                },
                download: {
                    type: DataTypes.STRING,
                },
                release: {
                    type: DataTypes.STRING,
                },
            },
            {
                // tableName: 'packs1'
            }
        );

        this.Stage = this.sequelize.define('Stage', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            pack_id: {
                type: DataTypes.INTEGER,
            },
            name: {
                type: DataTypes.STRING,
            },
            category: {
                type: DataTypes.STRING,
            },
            has_blue: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            has_green: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            has_red: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        });

        this.Battle = this.sequelize.define('Battle', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            message_id: {
                type: DataTypes.STRING,
            },
            creator_id: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            played: {
                type: DataTypes.ARRAY(DataTypes.INTEGER),
            },
            remaining: {
                type: DataTypes.ARRAY(DataTypes.INTEGER),
            },
        });
    }
}
