import container from './services/container';
import { DiscordService } from './services/discord.service';
import { EnvService } from './services/env.service';
import { StageService } from './services/stage.service';
import { TwitchService } from './services/twitch.service';
import { CommandService } from './services/command.service';
import { DatabaseService } from './services/database.service';

// Don't end program when uncaught exception occurs
process.on('uncaughtException', (error) => {
    console.log(error.stack);
});

// load env variables
const envService: EnvService = container.get<EnvService>(EnvService);
envService.init();

// setup base services
const stageService: StageService = container.get<StageService>(StageService);
stageService.init();

// setup commands
const commandService: CommandService =
    container.get<CommandService>(CommandService);
commandService.init();

const databaseService: DatabaseService =
    container.get<DatabaseService>(DatabaseService);
databaseService.init();

// finally, connect to discord & twitch
const discordService: DiscordService =
    container.get<DiscordService>(DiscordService);
discordService.init();
const twitchService: TwitchService =
    container.get<TwitchService>(TwitchService);
twitchService.init();
