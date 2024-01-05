import { Interaction } from 'discord.js';
import {
    Command,
    DiscordArgs,
    TwitchArgs,
} from '../interfaces/command.interface';

const aliases = ['lenient'];

const discordExecute = (discordArgs: DiscordArgs) => {};

const twitchExecute = async (twitchArgs: TwitchArgs) => {
    return `supernova${Math.random() < 0.5 ? '+' : '-'}${Math.floor(
        Math.random() * 10
    )} levels of leniency`;
};

const discordInteraction = (interaction: Interaction) => {};

const lenientCommand: Command = {
    discordExecute,
    twitchExecute,
    discordInteraction,
    aliases,
    description: [],
    arguments: [],
    examples: [],
};

export default lenientCommand;
