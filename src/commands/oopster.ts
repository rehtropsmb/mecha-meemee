import { Interaction } from 'discord.js';
import {
    Command,
    DiscordArgs,
    TwitchArgs,
} from '../interfaces/command.interface';
import { DatabaseService } from '../services/database.service';
import container from '../services/container';

const aliases = ['oopster'];

const getOopster = async (name: string): Promise<string> => {
    const databaseService: DatabaseService = container.resolve<DatabaseService>(DatabaseService);
    const pack: any = await databaseService.getPackByName(name);
    
    let names;
    if (pack) {
        names = (await databaseService.getPackStages(pack.id)).map(r => r.name);
    } else {
        names = await databaseService.getAllStageNames();
    }

    const stage1 = names[getRandomInt(names.length)];
    const stage2 = names[getRandomInt(names.length)];

    const string1 = stage1.substring(0, getScaledInt(stage1.length));
    const string2 = stage2.substring(stage2.length - getScaledInt(stage2.length));

    return `${string1}${string2} \n\n [${stage1}, ${stage2}]`;
}

const discordExecute = async (discordArgs: DiscordArgs) => {
    return await getOopster(discordArgs.args);
};

const twitchExecute = async (twitchArgs: TwitchArgs) => {
    return await getOopster(twitchArgs.args);
};

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
}

const getScaledInt = (max: number) => {
    return Math.floor(Math.random() * (Math.floor(max - (max / 3)))) + Math.floor(max / 3);
}

const oopsterCommand: Command = {
    // discordExecute,
    twitchExecute,
    aliases,
    description: [],
    arguments: [],
    examples: [],
};

export default oopsterCommand;
