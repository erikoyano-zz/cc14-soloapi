import { MigrationInterface, QueryRunner } from 'typeorm';

export class userInfo1598855897403 implements MigrationInterface {
	name = 'userInfo1598855897403';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "user_info" ("id" integer NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "gender" character varying NOT NULL, "email" character varying NOT NULL, "company" character varying NOT NULL, "job_title" character varying NOT NULL, "country" character varying NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_273a06d6cdc2085ee1ce7638b24" PRIMARY KEY ("id"))`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "user_info"`);
	}
}
