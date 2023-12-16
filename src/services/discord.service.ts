import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { Client, Events, IntentsBitField } from 'discord.js';
import { EnvService } from './env.service';

@injectable()
export class DiscordService {
    private envService: EnvService;
    constructor(@inject(EnvService) envService) {
        this.envService = envService;
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
            console.log('readied up!!');
        });

        client.on(Events.MessageCreate, async (message) => {
            console.log(message.content);
            if (message.content.startsWith('-elite ')) {
                const args = message.content.split(' ');
                const body = {
                    game: args[1],
                    category_name: 'main',
                    is_score: false,
                    level: args[2],
                };

                const response = await fetch(
                    'https://dtexopnygapvstzdhwai.supabase.co/rest/v1/rpc/get_chart_submissions',
                    {
                        method: 'post',
                        body: JSON.stringify(body),
                        headers: {
                            'Content-Type': 'application/json',
                            Apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0ZXhvcG55Z2FwdnN0emRod2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU3NDE0MzEsImV4cCI6MTk3MTMxNzQzMX0.tcxPv7bNJxHlaT8F8G7wmBvTVJCZsUxNqjUgp4EZN7g',
                        },
                    }
                );
                const data: any[] = (await response.json()) as any[];
                console.log(data);
                if (data.length < 1) {
                    message.reply('no records!');
                } else {
                    message.reply(
                        `${data[0].profile.username}, ${data[0].record}, ${data[0].proof}`
                    );
                }
            }
        });
    }
}
