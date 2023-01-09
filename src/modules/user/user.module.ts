import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from './domain/user.entity';

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity])],
	providers: [],
	controllers: []
})
export class UserModule { }