import { injectable } from 'inversify';
import 'reflect-metadata';
import {
    Command,
    DiscordArgs,
    TwitchArgs,
} from '../interfaces/command.interface';
import eliteCommand from '../commands/elite';
import { Interaction, Message } from 'discord.js';
import lenientCommand from '../commands/lenient';

@injectable()
export class CommandService {
    private commands: Command[] = [
        eliteCommand,
        lenientCommand,
    ];

    private discordCommands: any = {};
    private twitchCommands: any = {};
    private discordInteractions: Command[] = [];

    public init() {
        // load commands
        for (const cmd of this.commands) {
            // load discord command
            if (cmd.discordExecute) {
                for (const alias of cmd.aliases) {
                    if (this.discordCommands[alias]) {
                        throw new Error(`Cannot reregister alias "${alias}"`);
                    }
                    this.discordCommands[alias] = cmd;
                }
            }
            // load discord interaction
            if (cmd.discordInteraction) {
                this.discordInteractions.push(cmd);
            }
            // load twitch command
            if (cmd.twitchExecute) {
                for (const alias of cmd.aliases) {
                    if (this.twitchCommands[alias]) {
                        throw new Error(`Cannot reregister alias "${alias}"`);
                    }
                    this.twitchCommands[alias] = cmd;
                }
            }
        }
    }

    public handleDiscordCommand(message: Message) {
        if (!message.content.startsWith('-')) {
            return;
        }

        const command = message.content.split(' ')[0].substring(1);
        const args = message.content.substring(
            message.content.indexOf(command) + command.length + 1
        );

        if (!this.discordCommands[command]) {
            return;
        }

        this.discordCommands[command].discordExecute({
            command: command,
            args: args,
            message: message,
            user: message.author,
        } as DiscordArgs);
    }

    public handleDiscordInteraction(interaction: Interaction) {
        for (const command of this.discordInteractions) {
            command.discordInteraction(interaction);
        }
    }

    public handleTwitchCommand(message: string, user: string, channel: string) {
        console.log(message);
        const command = message.split(' ')[0].substring(1);
        const args = message.substring(
            message.indexOf(command) + command.length + 1
        );
        console.log(command);
        console.log(args);

        if (!this.twitchCommands[command]) {
            return;
        }

        return this.twitchCommands[command].twitchExecute({
            command: command,
            args: args,
            user: user,
            channel: channel,
        } as TwitchArgs);
    }
}
