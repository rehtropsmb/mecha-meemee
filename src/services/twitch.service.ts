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

        this.twitch.connect();
        this.twitch.on('logon', () => {
            console.log('Twitch Client Connected');
        });
        this.twitch.on('message', (channel, user, message, self) => {
            if (self) return;
            this.commandService.handleTwitchCommand(message, user, channel);
        });
    }

    public sendMessage(channelName: string, messages: string[]) {
        if (!channelName.startsWith('#')) {
            channelName = `#${channelName}`;
        }
        // const messages = this.removeEmoji(message);
        messages.forEach((block, index) => {
            setTimeout(() => {
                this.twitch.say(channelName, block);
            }, index * 2000);
        });
    }

    public joinChannel(channel: string): void {
        this.twitch.join(channel);
    }

    public leaveChannel(channel: string): void {
        this.twitch.part(channel);
    }
}
