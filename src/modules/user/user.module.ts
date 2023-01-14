import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateUserCommandHandler } from './commands/create-user/create-user.command-handler';
import { UserEntity } from './domain/user.entity';
import { UserController } from './user.controller';

const handlers = [CreateUserCommandHandler]

@Module({
	imports: [CqrsModule, TypeOrmModule.forFeature([UserEntity])],
	providers: [...handlers],
	controllers: [UserController]
})
export class UserModule { }