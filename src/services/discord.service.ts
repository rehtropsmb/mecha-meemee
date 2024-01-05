import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import {
    Client,
    Events,
    IntentsBitField,
    Interaction,
    Message,
} from 'discord.js';
import { EnvService } from './env.service';
import { CommandService } from './command.service';
import { EliteService } from './elite.service';

@injectable()
export class DiscordService {
    private envService: EnvService;
    private commandService: CommandService;
    // private eliteService: EliteService;
    constructor(
        @inject(EnvService) envService,
        @inject(CommandService) commandService
        // @inject(EliteService) eliteService
    ) {
        this.envService = envService;
        this.commandService = commandService;
        // this.eliteService = eliteService;
    }

    public async init(): Promise<void> {
        const client = new Client({
            intents: [
                IntentsBitField.Flags.Guilds,
                IntentsBitField.Flags.GuildMessages,
                IntentsBitField.Flags.MessageContent,
                IntentsBitField.Flags.DirectMessages,
            ],
        });

        client.login(this.envService.discordToken);

        client.on(Events.ClientReady, () => {
            console.log('Discord Client Connected');
        });

        client.on(Events.MessageCreate, async (message: Message) => {
            this.commandService.handleDiscordCommand(message);
        });

        client.on(
            Events.InteractionCreate,
            async (interaction: Interaction) => {
                this.commandService.handleDiscordInteraction(interaction);
            }
        );
    }
}
