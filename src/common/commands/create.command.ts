import { ApplicationContract } from '../contracts/application.contract';

export class CreateCommand<Contract extends ApplicationContract> {
	constructor(readonly input: Contract) { }
}