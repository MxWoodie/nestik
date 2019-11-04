import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    BooksModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => 
        configService.typeOrmConfig,
      inject: [ConfigService]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
