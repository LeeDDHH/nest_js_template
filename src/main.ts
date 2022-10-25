import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configuration } from '../config/configuration';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const server = configuration().server;
  await app.listen(server.port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
