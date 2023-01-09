import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appConfig } from 'src/config/app.config';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			...appConfig.typeorm
		})
	]
})
export class DatabaseModule { }