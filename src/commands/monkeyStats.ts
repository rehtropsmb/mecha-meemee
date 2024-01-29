import {
    Command,
    DiscordArgs,
    TwitchArgs,
} from '../interfaces/command.interface';
import { EliteUser } from '../interfaces/elite.interface';

const getUser = async (username: string): Promise<EliteUser> => {
    const url = new URL(
        'https://dtexopnygapvstzdhwai.supabase.co/rest/v1/profile'
    );
    url.searchParams.append(
        'select',
        'country,discord,id,username,twitch_username,twitter_handle,youtube_handle',
    );
    url.searchParams.append('username', `ilike.%${username}%`);
    url.searchParams.append('order', 'username.asc');
    url.searchParams.append('offset', '0');
    url.searchParams.append('limit', '5');

    const response = await fetch(url, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            Apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0ZXhvcG55Z2FwdnN0emRod2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU3NDE0MzEsImV4cCI6MTk3MTMxNzQzMX0.tcxPv7bNJxHlaT8F8G7wmBvTVJCZsUxNqjUgp4EZN7g',
        },
    });

    const userList = await response.json() as EliteUser[];

    if (userList.length < 1) {
        return null;
    }

    let result = userList[0];
    for (const user of userList) {
        if (user.username.toLowerCase() === username.toLowerCase()) {
            result = user;
            break;
        }
    }

    return result;
}

const getUserSubmissions = async (profileId: number) => {
    const url = new URL(
        'https://dtexopnygapvstzdhwai.supabase.co/rest/v1/submission'
    );
    url.searchParams.append(
        'select',
        'monkey(id,monkey_name),live,level(name),record',
    );
    url.searchParams.append('profile_id', `in.(${profileId})`);
    url.searchParams.append('order', 'id.desc');
    url.searchParams.append('offset', '0');
    url.searchParams.append('limit', '500');

    const response = await fetch(url, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            Apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0ZXhvcG55Z2FwdnN0emRod2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU3NDE0MzEsImV4cCI6MTk3MTMxNzQzMX0.tcxPv7bNJxHlaT8F8G7wmBvTVJCZsUxNqjUgp4EZN7g',
        },
    });

    const result = await response.json();

    return result;
};

const generateMonkeyList = async (userId: number) => {

    const results = await getUserSubmissions(userId) as any;

    const map = {};
    for (const a of results) {
        if (map[a.monkey.monkey_name]) {
            map[a.monkey.monkey_name]++;
        }
        else {
            map[a.monkey.monkey_name] = 1;
        }
        
    }

    const list = [];
    let total = 0;

    for (const monkey in map) {
        list.push({
            name: monkey,
            num: map[monkey],
        });
        total += map[monkey];
    }

    for (const val of list) {
        val.percent = Math.round((val.num / total) * 10000) / 100;
    }
    list.sort((a, b) => {
        return b.num - a.num;
    });

    return list;
};

const discordExecute = async (discordArgs: DiscordArgs) => {
    const { args, message } = discordArgs;

    const eliteUser = await getUser(args.trim());

    if (!eliteUser) {
        message.reply('User not found!');
        return;
    }

    const list = await generateMonkeyList(eliteUser.id);
    
    let text = `**${eliteUser.username}**'s most used monkeys:\n`;
    for (const val of list) {
        text += `**${val.name}**: ${val.percent}% *(${val.num} submissions)*\n`;
    }
    if (list.length < 1) {
        text += '*No submissions.*';
    }
    message.reply(text);
};

const twitchExecute = async (twitchArgs: TwitchArgs): Promise<string> => {
    const { args } = twitchArgs;

    const eliteUser = await getUser(args.trim());

    if (!eliteUser) {
        return 'User not found!';
    }

    const list = await generateMonkeyList(eliteUser.id);
    
    let text = `${eliteUser.username} uses `;
    if (list.length > 0) {
        text += `${list[0].name} (${list[0].percent}%, ${list[0].num} submissions)`;
    }
    if (list.length > 1) {
        text += ` and ${list[1].name} (${list[1].percent}%, ${list[1].num} submissions)`;
    }
    if (list.length < 1) {
        text = `${eliteUser.username} has no submissions`;
    }
    return text;
};

const monkeyStatsCommand: Command = {
    discordExecute,
    twitchExecute,
    aliases: ['monkey', 'monkeys'],
    description: [],
    arguments: [],
    examples: [],
};

export default monkeyStatsCommand;
