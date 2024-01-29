import {
    Command,
    DiscordArgs,
    TwitchArgs,
} from '../interfaces/command.interface';

const getUser = async (username: string) => {
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
    url.searchParams.append('limit', '20');

    const response = await fetch(url, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            Apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0ZXhvcG55Z2FwdnN0emRod2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU3NDE0MzEsImV4cCI6MTk3MTMxNzQzMX0.tcxPv7bNJxHlaT8F8G7wmBvTVJCZsUxNqjUgp4EZN7g',
        },
    });

    const result = await response.json();

    return result;
}

const getUserRecords = async (profileId: string) => {
    const url = new URL(
        'https://dtexopnygapvstzdhwai.supabase.co/rest/v1/submission'
    );
    url.searchParams.append(
        'select',
        'monkey(id,monkey_name),live,level(name),record',
        // 'all_position,id,level(category,mode(game(abb,name)),name,timer_type),position,profile(country,id,username),proof,record,score,tas,monkey(id,monkey_name)',
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

const discordExecute = async (discordArgs: DiscordArgs) => {
    const { command, args, message, user } = discordArgs;

    const eliteUsers = await getUser(args.trim()) as any;

    if (eliteUsers.length < 1) {
        message.reply('User not found!');
        return;
    }
    const id = eliteUsers[0].id;

    const results = await getUserRecords(id) as any;

    // if (results.length < 1) {
    //     message.reply('No submissions!');
    //     return;
    // }
    // let text = `**Replay Records:**\n`;

    // for (const r of results) {
    //     if (!r.live) {
    //         text += `${r.level.name.replace(/_/ig, ' ')}  | ${r.record}\n`;
    //     }
    // }

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
    
    let text = `**${eliteUsers[0].username}**'s most used monkeys:\n`;
    list.sort((a, b) => {
        return b.num - a.num;
    });
    for (const val of list) {
        text += `**${val.name}**: ${val.percent}% *(${val.num} submissions)*\n`;
    }
    if (list.length < 1) {
        text += '*No submissions.*';
    }
    message.reply(text);
};

const monkeyCommand: Command = {
    discordExecute,
    aliases: ['replay', 'replays'],
    description: [],
    arguments: [],
    examples: [],
};

export default monkeyCommand;
