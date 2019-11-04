import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class ConfigService {
  constructor() {
    dotenv.config({ path: '.env' });
  }

  public get(key: string): string {
      return process.env[key];
  }

  public getNumber(key: string): number {
    return Number(this.get(key));
  }

  get typeOrmConfig(): TypeOrmModuleOptions {
      let entities = ['src/**/*.entity.ts'];
      let migrations = ['src/migrations/**/*.ts'];

      return {
          entities,
          migrations,
          keepConnectionAlive: true,
          type: 'mysql',
          host: this.get('DB_HOST'),
          port: this.getNumber('DB_PORT'),
          username: this.get('DB_USERNAME'),
          password: this.get('DB_PASSWORD'),
          database: this.get('DB_DATABASE'),
          synchronize: false,
          migrationsRun: true,
          logging: true,
      };
  }
}