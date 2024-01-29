import { Interaction, Message, User } from 'discord.js';
import { TwitchUser } from './twitch.interface';

export interface Command {
    // command aliases
    aliases: string[];
    // execution functions
    discordExecute?: (discordArgs: DiscordArgs) => void;
    twitchExecute?: (twitchArgs: TwitchArgs) => Promise<string>;
    discordInteraction?: (interaction: Interaction) => void;
    // help text
    description: string[];
    arguments: string[];
    examples: string[];
}

export interface DiscordArgs {
    command: string;
    args: string;
    message: Message;
    user: User;
}

export interface TwitchArgs {
    command: string;
    args: string;
    user: TwitchUser;
    channel: string;
}
