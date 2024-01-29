import { Interaction } from 'discord.js';
import {
    Command,
    DiscordArgs,
    TwitchArgs,
} from '../interfaces/command.interface';

const aliases = ['template'];

const discordExecute = async (discordArgs: DiscordArgs) => {
    return 'Finished';
};

const twitchExecute = async (twitchArgs: TwitchArgs) => {
    return 'Finished';
};

const discordInteraction = (interaction: Interaction) => {};

const templateCommand: Command = {
    discordExecute,
    twitchExecute,
    discordInteraction,
    aliases,
    description: [],
    arguments: [],
    examples: [],
};

export default templateCommand;
