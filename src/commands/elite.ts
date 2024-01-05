import {
    Command,
    DiscordArgs,
    TwitchArgs,
} from '../interfaces/command.interface';
import { Stage } from '../interfaces/stage.interface';
import container from '../services/container';
import { StageService } from '../services/stage.service';
import { TwitchService } from '../services/twitch.service';

const getGame = async () => {
    const gameAbb = 'gaiden';

    const url = new URL(
        'https://dtexopnygapvstzdhwai.supabase.co/rest/v1/game'
    );
    url.searchParams.append(
        'select',
        'abb,custom,live_preference,mode(level(category,chart_type,name,time,timer_type),category,name)'
    );
    url.searchParams.append('order', 'custom.asc,id.asc');
    url.searchParams.append('mode.order', 'id.asc');
    url.searchParams.append('mode.level.order', 'id.asc');
    url.searchParams.append('abb', `eq.${gameAbb}`);

    const response = await fetch(url, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            Apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0ZXhvcG55Z2FwdnN0emRod2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU3NDE0MzEsImV4cCI6MTk3MTMxNzQzMX0.tcxPv7bNJxHlaT8F8G7wmBvTVJCZsUxNqjUgp4EZN7g',
        },
    });

    return await response.json();
};

const fetchResponse = async (stage: Stage, score: boolean, options: Options): Promise<string> => {
    let stagename = '';

    if (stage.cat.toLowerCase() === 'story') {
        stagename += `world`;
    } 
    // else if (stage.cat.startsWith('B')) {
    //     stagename += `beginner`;
    // } else if (stage.cat.startsWith('A')) {
    //     stagename += `advanced`;
    // } else if (stage.cat.startsWith('E')) {
    //     stagename += `expert`;
    // } else if (stage.cat.startsWith('M')) {
    //     stagename += `master`;
    // }

    // if (stage.cat.endsWith('X')) {
    //     stagename += `_extra`;
    // }

    stagename += `_${stage.num}_-_${stage.name.replace(/\s/g, '_')}`;

    if (options.stunt) {
        stagename = stagename + '_(stunt)';
    } else {
        stagename = stagename + '_(blue)';
    }
    // if (stage.hasGreen || stage.hasRed) {
    //     stagename = stagename + '_(blue)'; // add green/red support later
    // }

    // const mode = ((await getGame()) as any).mode;

    const stageService: StageService =
        container.resolve<StageService>(StageService);
    const body = {
        game: stageService.getPackByName(stage.pack).elite,
        category_name: 'main',
        is_score: score,
        level: stagename.toLowerCase(),
    };

    console.log(stagename);

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
        return 'no records!';
    } else {
        return `${data[0].profile.username}, ${data[0].record}, ${data[0].proof}`;
    }
};

interface Options {
    name?: string;
    blue?: boolean;
    green?: boolean;
    red?: boolean;
    stunt?: boolean;
};

const cleanArgs = (args: string): Options => {
    const result: Options = {};
    const options = ['blue', 'green', 'red', 'stunt'];
    for (const option of options) {
        if (args.includes(`-${option}`)) {
            args = args.replace(`-${option}`, '').trim();
            result[option] = true;
        }
    }
    result.name = args;

    return result;
}

const findStage = (name: string): Stage[] => {
    const stageService: StageService =
        container.resolve<StageService>(StageService);
    return stageService.getStageMatches(name);
}

const discordExecute = async (discordArgs: DiscordArgs) => {
    const { command, args, message, user } = discordArgs;

    const options = cleanArgs(args);
    const results = findStage(options.name);
    if (results.length < 1) {
        message.reply('what stage?');
        return;
    }

    const text = await fetchResponse(results[0], command === 'elitescore', options);

    message.reply(text);
};

const twitchExecute = async (twitchArgs: TwitchArgs) => {
    const { command, args, user, channel } = twitchArgs;

    const options = cleanArgs(args);
    const results = findStage(options.name);
    if (results.length < 1) {
        return 'what stage?';
    }

    const text = await fetchResponse(results[0], command === 'elitescore', options);
    return text;
};

const eliteCommand: Command = {
    discordExecute,
    twitchExecute,
    aliases: ['elitetime', 'elitescore', 'elitesweep'],
    description: [],
    arguments: [],
    examples: [],
};

export default eliteCommand;
