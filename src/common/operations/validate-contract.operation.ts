import { validate } from 'class-validator';

import { ApplicationContract } from '../contracts/application.contract';

export async function validateContract<T extends ApplicationContract>(contractClass: { new(): T }, input: T): Promise<T> {
	console.log(typeof input)
	if (input instanceof contractClass) {
		const errors = await validate(input, { whitelist: true, validationError: { target: false, value: false } })

		if (errors.length > 0) {
			throw new Error('validation error')
		} else {
			return input
		}
	}
	throw new Error('instance of contract class error')
}
