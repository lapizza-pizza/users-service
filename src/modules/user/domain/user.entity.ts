import { ApplicationEntity } from '@src/common/entities/application.entity';
import { Column, Entity } from 'typeorm';


@Entity({ name: 'users' })
export class UserEntity extends ApplicationEntity {
	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	birthday: Date;
}