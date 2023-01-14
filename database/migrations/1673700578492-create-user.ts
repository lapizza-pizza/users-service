import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1673700578492 implements MigrationInterface {
    name = 'CreateUser1673700578492'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE "users" (
            "id" uuid NOT NULL, 
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), 
            "deletedAt" TIMESTAMP, 
            "firstName" character varying NOT NULL, 
            "lastName" character varying NOT NULL, 
            "birthday" TIMESTAMP NOT NULL, 
            CONSTRAINT "PK_users__id" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
