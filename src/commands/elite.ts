import { Command, DiscordArgs } from '../interfaces/command.interface';
import { Stage } from '../interfaces/stage.interface';
import container from '../services/container';
import { StageService } from '../services/stage.service';

const discordExecute = async (discordArgs: DiscordArgs) => {
    const { command, args, message, user } = discordArgs;

    const stageService: StageService =
        container.resolve<StageService>(StageService);
    const results: Stage[] = stageService.getStageMatches(args);

    if (results.length < 1) {
        message.reply('what stage?');
        return;
    }
    const body = {
        game: results[0].pack,
        category_name: 'main',
        is_score: false,
        level: `world_${results[0].slot}_-_${results[0].name
            .toLowerCase()
            .replace(' ', '_')}_(blue)`,
    };

    console.log(body.level);

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
    if (data.length < 1) {
        message.reply('no records!');
    } else {
        message.reply(
            `${data[0].profile.username}, ${data[0].record}, ${data[0].proof}`
        );
    }
};

const eliteCommand: Command = {
    discordExecute,
    aliases: ['elite'],
    description: [],
    arguments: [],
    examples: [],
};

export default eliteCommand;
