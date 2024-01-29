import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import * as tmi from 'tmi.js';
import { EnvService } from './env.service';
import { CommandService } from './command.service';

@injectable()
export class TwitchService {
    private envService: EnvService;
    private commandService: CommandService;
    constructor(
        @inject(EnvService) envService,
        @inject(CommandService) commandService
    ) {
        this.envService = envService;
        this.commandService = commandService;
    }

    private twitch: any;

    private channels: string[] = [
        'mechameemee',
        'rehtrop',
        'ganon',
        'Namb0',
        'eddy0777',
        'atgv01',
        'TheWalkr_',
        'dmt_goobz',
        'MonkeyBallSpeedruns',
        'Youbacon42',
        'ToothpasteThy',
        'Kpenpen',
    ];

    public async init() {
        this.twitch = new tmi.Client({
            options: { debug: false },
            connection: {
                reconnect: true,
                secure: true,
            },
            identity: {
                username: this.envService.twitchUsername,
                password: this.envService.twitchToken,
            },
            channels: this.channels,
        });
        this.twitch.on('logon', () => {
            console.log('Twitch Client Connected');
            console.log(`Connected to ${this.channels.length} Channels.`);
        });
        this.twitch.on('message', async (channel, user, message, self) => {
            if (self) return;
            if (!message.startsWith('-')) {
                return;
            }
            const result = await this.commandService.handleTwitchCommand(
                message,
                user,
                channel
            );
            if (result) {
                this.sendMessage(channel, result);
            }
        });

        this.twitch.connect();
    }

    public sendMessage(channelName: string, message: string) {
        if (!channelName.startsWith('#')) {
            channelName = `#${channelName}`;
        }
        // const messages = this.removeEmoji(message);
        // messages.forEach((block, index) => {
        //     console.log(block);
        //     setTimeout(() => {
        this.twitch.say(channelName, message);
        //     }, index * 2000);
        // });
    }

    public joinChannel(channel: string): void {
        this.twitch.join(channel);
    }

    public leaveChannel(channel: string): void {
        this.twitch.part(channel);
    }
}
