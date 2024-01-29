import { EmbedBuilder } from 'discord.js';
import { Command, DiscordArgs } from '../interfaces/command.interface';
import container from '../services/container';
import { EnvService } from '../services/env.service';

const aliases = ['live', 'streams', 'streamers'];

const getLiveBallers = async () => {
    const envService: EnvService = container.resolve<EnvService>(EnvService);
    const response = await fetch(
        'https://api.twitch.tv/helix/streams?game_id=4694&game_id=6624&game_id=5951&game_id=1828814242&game_id=514860&game_id=6362&game_id=14693',
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${envService.twitchToken}`,
                'Client-Id': envService.twitchClientId,
            },
        }
    );

    const body = (await response.json()) as any;
    const data = body.data as any[];

    if (!data) {
        throw new Error(
            `Twitch Request Status: ${body.status}. Stuff went wrong`
        );
    }

    return data;
};
const discordExecute = async (discordArgs: DiscordArgs) => {
    const data = await getLiveBallers();

    const embed = new EmbedBuilder()
        .setTitle('Currently Live:')
        .setTimestamp(Date.now());

    if (data.length === 0) {
        embed.setDescription(
            'Nobody is streaming a monkey ball game right now :('
        );
    } else {
        let fields = [];

        data.forEach((stream) => {
            if (stream.user_name.toLowerCase() === 'jcool114') {
                return;
            }
            fields.push({
                name: `${stream.user_name} is playing ${stream.game_name}`,
                value: `*${stream.title}*\nhttps://www.twitch.tv/${stream.user_login}`,
            });
        });

        embed.addFields(...fields);
    }

    discordArgs.message.reply({ embeds: [embed] });
    return '';
};

const liveCommand: Command = {
    discordExecute,
    aliases,
    description: [],
    arguments: [],
    examples: [],
};

export default liveCommand;
