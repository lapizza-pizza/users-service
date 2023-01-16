import { ApiProperty } from '@nestjs/swagger';
import { ApplicationContract } from '@src/common/contracts/application.contract';
import { UUID } from '@src/common/types/uuid.brand';
import { Expose } from 'class-transformer';
import { IsDefined, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateUserContract extends ApplicationContract {
	@IsUUID()
	@IsDefined()
	@Expose()
	@ApiProperty({
		required: true,
		type: String,
		description: 'идентификатор пользователя',
		example: 'fb0e99c2-6d61-41bd-962e-9216f59210b6'
	})
	id: UUID;

	@IsString()
	@IsDefined()
	@Expose()
	@ApiProperty({
		required: true,
		type: String,
		description: 'имя пользователя',
		example: 'Иван'
	})
	firstName: string;

	@IsString()
	@IsOptional()
	@Expose()
	@ApiProperty({
		required: true,
		type: String,
		description: 'фамилия пользователя',
		example: 'Иванов'
	})
	lastName: string;
}