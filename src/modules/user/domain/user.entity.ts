import { ApiProperty } from '@nestjs/swagger';
import { ApplicationEntity } from '@src/common/entities/application.entity';
import { Column, Entity } from 'typeorm';


@Entity({ name: 'users' })
export class UserEntity extends ApplicationEntity {
	@Column()
	@ApiProperty({
		type: String,
		description: 'имя пользователя',
		example: 'Иван'
	})
	firstName: string;

	@Column()
	@ApiProperty({
		type: String,
		description: 'фамилия пользователя',
		example: 'Иванов'
	})
	lastName: string;
}