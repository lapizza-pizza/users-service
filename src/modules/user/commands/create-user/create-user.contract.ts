import { ApplicationContract } from '@src/common/contracts/application.contract';
import { UUID } from '@src/common/types/uuid.brand';
import { IsDefined, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateUserContract extends ApplicationContract {
	@IsUUID()
	@IsDefined()
	id: UUID;

	@IsString()
	@IsDefined()
	firstName: string;

	@IsString()
	@IsOptional()
	lastName?: string;
}