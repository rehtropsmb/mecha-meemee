import {
    Command,
    DiscordArgs,
    TwitchArgs,
} from '../interfaces/command.interface';

const aliases = ['discord', 'bug', 'feature', 'invite', 'about'];

const getLink = (cmd: string): string => {
    switch (cmd.toLowerCase()) {
        case 'discord':
        case 'bug':
        case 'feature': {
            return 'Bug reports, feature requests, and dev announcements can all be found in this server: https://discord.gg/mx6vkyrjb9';
        }
        case 'invite': {
            return 'MechaMeemee is still in Beta, the invite link will be coming soon!';
        }
        case 'about': {
            return `I'm MechaMeemee, a bot created for the Super Monkey Ball community. You can get pack information, search for speedrun records, and more! Use \`-help\` to see a list of commands, \`-invite\` to invite to your own Discord server, and \`-twitch\` to invite to your twitch chat. If you have any questions or encounter any bugs, please join the MechaMeemee discord by running \`-discord\`!`;
        }
    }

    return `something terrible happened... (${cmd})`;
};

const discordExecute = async (discordArgs: DiscordArgs) => {
    return getLink(discordArgs.command);
};

const twitchExecute = async (twitchArgs: TwitchArgs) => {
    return getLink(twitchArgs.command);
};

const linksCommand: Command = {
    discordExecute,
    twitchExecute,
    aliases,
    description: [],
    arguments: [],
    examples: [],
};

export default linksCommand;
