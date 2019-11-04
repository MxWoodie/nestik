import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBook1572862192143 implements MigrationInterface {
    name = 'CreateBook1572862192143'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `book` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(50) NOT NULL, `description` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `book`", undefined);
    }

}
