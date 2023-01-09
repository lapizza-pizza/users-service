import { Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
	@Post('/create')
	async createUser() {
		return null
	}
}