import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { EntityManager } from 'typeorm';

import { CreateUserCommand } from './commands/create-user/create-user.command';
import { CreateUserContract } from './commands/create-user/create-user.contract';
import { UserEntity } from './domain/user.entity';

@Controller('user')
@ApiTags('user')
export class UserController {
	constructor(
		private readonly commandBus: CommandBus,
		private readonly em: EntityManager
	) { }

	@Post()
	@ApiBody({ type: CreateUserContract })
	@ApiResponse({ status: 201, type: UserEntity })
	async create(@Body() contract: CreateUserContract) {
		return this.commandBus.execute(new CreateUserCommand(contract))
	}

	@Get()
	@ApiResponse({ status: 200, type: [UserEntity] })
	async find(): Promise<UserEntity[]> {
		return this.em.find(UserEntity)
	}
}