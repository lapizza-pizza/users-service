import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import { ApplicationContract } from '../contracts/application.contract';

export async function validateContract<T extends ApplicationContract>(contractClass: { new(): T }, input: object): Promise<T> {
	const contract = input instanceof contractClass ? input : plainToInstance(contractClass, input || {}, { excludeExtraneousValues: true })
	const errors = await validate(contract, { whitelist: true, validationError: { target: false, value: false } })

	if (errors.length > 0) {
		throw new Error('validation error')
	} else {
		return contract
	}
}
