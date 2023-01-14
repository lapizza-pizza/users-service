import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { validateContract } from '@src/common/operations/validate-contract.operation';
import { EntityManager } from 'typeorm';

import { UserEntity } from '../../domain/user.entity';
import { CreateUserCommand } from './create-user.command';
import { CreateUserContract } from './create-user.contract';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
	constructor(private readonly em: EntityManager) { }

	async execute(command: CreateUserCommand): Promise<UserEntity> {
		const contract = await validateContract(CreateUserContract, command.input)

		const user = this.em.create(UserEntity, { ...contract })

		return this.em.save(user)
	}

}