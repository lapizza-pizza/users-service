import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { UUID } from '@src/common/types/uuid.brand';
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

	@Get(':id')
	@ApiResponse({ status: 200, type: UserEntity })
	async findOne(@Param('id') id: string): Promise<UserEntity> {
		return this.em.findOne(UserEntity, { where: { id: id as UUID, deletedAt: null } })
	}
}