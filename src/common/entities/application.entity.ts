import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, DeleteDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';

import { UUID } from '../types/uuid.brand';

export class ApplicationEntity {
	@PrimaryColumn({ type: 'uuid' })
	@ApiProperty({
		type: String,
		description: 'идентификатор пользователя',
		example: 'fb0e99c2-6d61-41bd-962e-9216f59210b6'
	})
	id: UUID

	@CreateDateColumn()
	@ApiProperty({
		type: Date,
		description: 'дата создания пользователя',
		example: '16.01.2023 -....'
	})
	createdAt: Date

	@UpdateDateColumn()
	@ApiProperty({
		type: Date,
		description: 'дата обновления пользователя',
		example: '16.01.2023 -....'
	})
	updatedAt?: Date

	@DeleteDateColumn()
	@ApiProperty({
		type: Date,
		description: 'дата удаления пользователя',
		example: '16.01.2023 -....'
	})
	deletedAt?: Date
}