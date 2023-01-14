import { NestFactory } from '@nestjs/core';

import { envConfig as env } from './config/env.config';
import { AppModule } from './modules/server/app.module';

require('module-alias/register')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.PORT || 3000);
}
bootstrap();
