import { ApplicationContract } from '@src/common/contracts/application.contract';
import { UUID } from '@src/common/types/uuid.brand';
import { Expose } from 'class-transformer';
import { IsDefined, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateUserContract extends ApplicationContract {
	@IsUUID()
	@IsDefined()
	@Expose()
	id: UUID;

	@IsString()
	@IsDefined()
	@Expose()
	firstName: string;

	@IsString()
	@IsOptional()
	@Expose()
	lastName?: string;
}