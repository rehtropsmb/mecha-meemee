import { injectable } from 'inversify';
import 'reflect-metadata';
import { Client, TextChannel } from 'discord.js';
import {
    BoardSubmission,
    RecentSubmission,
} from '../interfaces/elite.interface';

@injectable()
export class EliteService {
    private discordClient: Client;

    public async init(discordClient: Client) {
        this.discordClient = discordClient;
    }

    private async getRecent(): Promise<RecentSubmission[]> {
        const response = await fetch(
            'https://dtexopnygapvstzdhwai.supabase.co/rest/v1/submission?select=all_position%2Cid%2Clevel%28category%2Cmode%28game%28abb%2Cname%29%29%2Cname%2Ctimer_type%29%2Cposition%2Cprofile%28country%2Cid%2Cusername%29%2Cproof%2Crecord%2Cscore%2Ctas&offset=0&limit=10&order=id.desc',
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0ZXhvcG55Z2FwdnN0emRod2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU3NDE0MzEsImV4cCI6MTk3MTMxNzQzMX0.tcxPv7bNJxHlaT8F8G7wmBvTVJCZsUxNqjUgp4EZN7g`,
                    Apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0ZXhvcG55Z2FwdnN0emRod2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU3NDE0MzEsImV4cCI6MTk3MTMxNzQzMX0.tcxPv7bNJxHlaT8F8G7wmBvTVJCZsUxNqjUgp4EZN7g',
                },
            }
        );

        const body = (await response.json()) as RecentSubmission[];
        if (!body) {
            throw new Error(`Stuff went wrong with the search!`);
        }

        body.reverse();
        return body;
    }

    private getEmoji(name: string): string {
        return `${this.discordClient.emojis.cache.find(
            (emoji) => emoji.name === name
        )}`;
    }

    private stringToName(string: String) {
        let name = string.replace(/_/g, ' ').replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
        });

        name.replace(' (Blue)', this.getEmoji('goal_blue'));
        name.replace(' (Green)', this.getEmoji('goal_green'));
        name.replace(' (Red)', this.getEmoji('goal_red'));
        name.replace(' (Stunt)', this.getEmoji('goal_purple'));

        return name;
    }
}
