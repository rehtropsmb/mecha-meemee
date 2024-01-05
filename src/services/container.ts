import { Container } from 'inversify';
import { DiscordService } from './discord.service';
import { EnvService } from './env.service';
import { TwitchService } from './twitch.service';
import { StageService } from './stage.service';
import { CommandService } from './command.service';
import { EliteService } from './elite.service';

const container = new Container();
container.bind<EnvService>(EnvService).toSelf();
container.bind<StageService>(StageService).toSelf().inSingletonScope();
container.bind<CommandService>(CommandService).toSelf().inSingletonScope();
container.bind<DiscordService>(DiscordService).toSelf().inSingletonScope();
container.bind<TwitchService>(TwitchService).toSelf().inSingletonScope();
container.bind<EliteService>(EliteService).toSelf().inSingletonScope();

export default container;
