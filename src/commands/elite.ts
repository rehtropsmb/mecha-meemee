import Fuse from 'fuse.js';
import {
    Command,
    DiscordArgs,
    TwitchArgs,
} from '../interfaces/command.interface';
import {
    BoardSubmission,
    EliteGame,
    EliteLevel,
} from '../interfaces/elite.interface';
import { Stage } from '../interfaces/stage.interface';
import container from '../services/container';
import { StageService } from '../services/stage.service';

const getGame = async (gameAbb): Promise<EliteGame> => {
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

    return (await response.json()) as EliteGame;
};

const getStageName = (stage: Stage, options: Options) => {
    let stagename = '';

    if (stage.cat.toLowerCase() === 'story') {
        stagename += `world`;
    } else if (stage.cat.startsWith('B')) {
        stagename += `beginner`;
    } else if (stage.cat.startsWith('A')) {
        stagename += `advanced`;
    } else if (stage.cat.startsWith('E')) {
        stagename += `expert`;
    } else if (stage.cat.startsWith('M')) {
        stagename += `master`;
    }

    if (stage.cat.endsWith('X')) {
        stagename += `_extra`;
    }

    stagename += `_${stage.num}_-_${stage.name.replace(/\s/g, '_')}`;

    if (options.stunt) {
        stagename = stagename + '_(stunt)';
    } else if (options.red) {
        stagename = stagename + '_(red)';
    } else if (options.green) {
        stagename = stagename + '_(green)';
    } else {
        stagename = stagename + '_(blue)';
    }
};

const getRecords = async (
    game: string,
    category: string,
    score: boolean,
    live: boolean = true
) => {
    const body = {
        abb: game,
        category: category,
        live_only: live,
        score: score,
    };

    const response = await fetch(
        'https://dtexopnygapvstzdhwai.supabase.co/rest/v1/rpc/get_records',
        {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                Apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0ZXhvcG55Z2FwdnN0emRod2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU3NDE0MzEsImV4cCI6MTk3MTMxNzQzMX0.tcxPv7bNJxHlaT8F8G7wmBvTVJCZsUxNqjUgp4EZN7g',
            },
        }
    );
    return response.json();
};

const getLeaderboard = async (
    stagename: string,
    category: string,
    game: string,
    score: boolean
): Promise<BoardSubmission[]> => {
    const body = {
        game: game,
        category_name: category,
        is_score: score,
        level: stagename,
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
    const data: BoardSubmission[] =
        (await response.json()) as BoardSubmission[];
    return data;
};

const fetchResponse = async (
    stagename: string,
    score: boolean,
    pack: string
): Promise<string> => {
    // let stagename = '';

    // if (stage.cat.toLowerCase() === 'story') {
    //     stagename += `world`;
    // }

    // stagename += `_${stage.num}_-_${stage.name.replace(/\s/g, '_')}`;

    // if (options.stunt) {
    //     stagename = stagename + '_(stunt)';
    // } else {
    //     stagename = stagename + '_(blue)';
    // }
    // if (stage.hasGreen || stage.hasRed) {
    //     stagename = stagename + '_(blue)'; // add green/red support later
    // }

    // const mode = ((await getGame()) as any).mode;

    const category = 'main';

    const stageService: StageService =
        container.resolve<StageService>(StageService);
    const data = await getLeaderboard(stagename, category, pack, score);

    if (data.length < 1) {
        return 'no records!';
    } else {
        return `${data[0].profile.username}, ${data[0].record}, ${data[0].proof}`;
    }
};

// const getEmoji = (name: string): string => {
//     return `${client.emojis.cache.find((emoji) => emoji.name === name)}`;
// };

const formatResult = (
    game: EliteGame,
    level: EliteLevel,
    leaderboard: BoardSubmission[]
) => {
    const gameName = game.name;
    const stageName = level.name;
    const record = leaderboard[0].record;
    const recordLink = leaderboard[0].proof
        .replace('//twitter.com', '//fxtwitter.com')
        .replace('//x.com', '//fixupx.com');
    const username = leaderboard[0].profile.username;
    const usernameLink = `https://www.smbelite.net/user/${leaderboard[0].profile.id}`;
    const leaderboardLink = `https://smbelite.net/games/${game.abb}/${
        level.category
    }/${false ? 'score' : 'time'}/${level.name}`;
    let medal;
    if (leaderboard[0].medal === 'platinum') {
        medal = 'Platinum';
        // medal = `${getEmoji('platinum')} Platinum`;
    } else {
        medal = 'Gold';
        // medal = `${getEmoji('gold')} Gold`;
    }

    return `**${gameName}**\n${stageName}\n**[${record}](${recordLink})** by [${username}](<${usernameLink}>) | **${medal}** on [SMB Elite](<${leaderboardLink}>)`;
};

interface Options {
    name?: string;
    blue?: boolean;
    green?: boolean;
    red?: boolean;
    stunt?: boolean;
}

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
};

const findStage = (name: string): Stage[] => {
    const stageService: StageService =
        container.resolve<StageService>(StageService);
    return stageService.getStageMatches(name);
};

const discordExecute = async (discordArgs: DiscordArgs) => {
    const { command, args, message, user } = discordArgs;

    const game = (await getGame('stardust'))[0];
    const stageArr = [];

    for (const category of game.mode) {
        for (const chart of category.level) {
            stageArr.push(chart);
        }
    }

    const stageFuse = new Fuse(stageArr, {
        includeScore: true,
        keys: ['name'],
    });

    const options = cleanArgs(args);
    const search = stageFuse.search(options.name);

    if (search.length < 1) {
        message.reply('what stage?');
        return;
    }
    const name = search[0].item.name;

    const text = await fetchResponse(
        name,
        command === 'elitescore',
        'stardust'
    );

    return text;
};

// const twitchExecute = async (twitchArgs: TwitchArgs) => {
//     const { command, args, user, channel } = twitchArgs;

//     const options = cleanArgs(args);
//     const results = findStage(options.name);
//     if (results.length < 1) {
//         return 'what stage?';
//     }

//     const text = await fetchResponse(results[0], command === 'elitescore', options);
//     return text;
// };

const eliteCommand: Command = {
    discordExecute,
    // twitchExecute,
    aliases: ['elitetime', 'elitescore', 'elitesweep'],
    description: [],
    arguments: [],
    examples: [],
};

export default eliteCommand;
