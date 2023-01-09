import { bool, cleanEnv, num, str } from 'envalid';

export const envConfig = cleanEnv(process.env, {
	PORT: num({ default: 3000 }),
	POSTGRES_HOST: str({ default: 'localhost' }),
	POSTGRES_PORT: num({ default: 5500 }),
	POSTGRES_USERNAME: str({ default: 'pizza_root' }),
	POSTGRES_PASSWORD: str({ default: '1H1d3e9g' }),
	POSTGRES_DATABASE: str({ default: 'pizza' }),
	POSTGRES_SYNCHRONIZE: bool({ default: false }),
	POSTGRES_LOGGING: bool({ default: false }),
	POSTGRES_MAX_QUERY_EXECUTION_TIME: num({ default: 1000 }),
	POSTGRES_MIGRATIONS_RUN: bool({ default: false }),
});
