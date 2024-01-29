import { Interaction } from 'discord.js';
import {
    Command,
    DiscordArgs,
    TwitchArgs,
} from '../interfaces/command.interface';

const aliases = ['vibecheck', 'vibes', 'bonescheck', 'bonecheck','bones', 'coin', 'flip', 'lenient', 'leniency'];

// range is [0, max]
const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * (max + 1));
};

const getResult = (cmd: string, username: string) => {
    switch (cmd.toLowerCase()) {
        case 'vibecheck':
        case 'vibes': {
            return `${username} is **${getRandomInt(100)}% vibing**`;
        }
        case 'bonescheck':
        case 'bonecheck':
        case 'bones': {
            return `${username} is **${getRandomInt(100)}% bones**`;
        }
        case 'coin':
        case 'flip': {
            return `The coin flipped and landed on **${getRandomInt(1) ? 'heads' : 'tails'}**.`;
        }
        case 'lenient':
        case 'leniency': {
            return `It's **${getRandomInt(1) ? 'cope' : '𝓵𝓮𝓷𝓲𝓮𝓷𝓽'}**.`;
        }
    }

    return `something terrible happened... (${cmd})`;
};

const discordExecute = (discordArgs: DiscordArgs) => {
    const text = getResult(discordArgs.command, discordArgs.user.username);
    discordArgs.message.reply(text);
};

const twitchExecute = async (twitchArgs: TwitchArgs): Promise<string> => {
    const text = getResult(twitchArgs.command, twitchArgs.user).replace(/\*/g, '');
    return text;
};

const discordInteraction = (interaction: Interaction) => {};

const randomCommand: Command = {
    discordExecute,
    twitchExecute,
    discordInteraction,
    aliases,
    description: [],
    arguments: [],
    examples: [],
};

export default randomCommand;
