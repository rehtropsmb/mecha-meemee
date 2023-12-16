import { Container } from 'inversify';
import { DiscordService } from './discord.service';
import { EnvService } from './env.service';
import { TwitchService } from './twitch.service';
import { StageService } from './stage.service';
import { CommandService } from './command.service';

const container = new Container();
container.bind<EnvService>(EnvService).toSelf();
container.bind<DiscordService>(DiscordService).toSelf();
container.bind<TwitchService>(TwitchService).toSelf();
container.bind<StageService>(StageService).toSelf();
container.bind<CommandService>(CommandService).toSelf();

export default container;
