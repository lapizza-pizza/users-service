import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';

import { envConfig as env } from './config/env.config';
import { AppModule } from './modules/server/app.module';

require('module-alias/register')

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors();

	const config = new DocumentBuilder()
		.setTitle('User api')
		.setDescription('user service')
		.setVersion('1.0')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	await app.listen(env.PORT || 3000);
}
bootstrap();
