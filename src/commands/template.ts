import { Interaction } from 'discord.js';
import {
    Command,
    DiscordArgs,
    TwitchArgs,
} from '../interfaces/command.interface';

const aliases = ['template'];

const discordExecute = (discordArgs: DiscordArgs) => {};

const twitchExecute = (twitchArgs: TwitchArgs) => {};

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
