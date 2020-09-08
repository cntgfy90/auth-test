import { MigrationInterface, QueryRunner } from 'typeorm'

export class createUserTable1599306060472 implements MigrationInterface {
    name = 'createUserTable1599306060472'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "Users" ("id" SERIAL NOT NULL, "email" citext NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Users"`)
    }
}
