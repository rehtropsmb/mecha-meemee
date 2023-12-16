import container from './services/container';
import { DiscordService } from './services/discord.service';
import { EnvService } from './services/env.service';
import { StageService } from './services/stage.service';
import { TwitchService } from './services/twitch.service';
import { CommandService } from './services/command.service';

// Don't end program when uncaught exception occurs
process.on('uncaughtException', (error) => {
    console.log(error.stack);
});

// load env variables
const envService: EnvService = container.resolve<EnvService>(EnvService);
envService.init();

// connect to discord
const discordService: DiscordService =
    container.resolve<DiscordService>(DiscordService);
discordService.init();

// connect to twitch
const twitchService: TwitchService = container.resolve<TwitchService>(TwitchService);
twitchService.init();

// setup main services
const stageService: StageService = container.resolve<StageService>(StageService);
stageService.init();
const commandService: CommandService = container.resolve<CommandService>(CommandService);
commandService.init();