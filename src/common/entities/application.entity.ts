import { CreateDateColumn, DeleteDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';

import { UUID } from '../types/uuid.brand';

export class ApplicationEntity {
	@PrimaryColumn()
	id: UUID

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt?: Date

	@DeleteDateColumn()
	deletedAt?: Date
}