import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      //host: "localhost",
      //port: 3306,
      //username: "test",
      //password: "test",
      database: "database",
      synchronize: true,
      //logging: false,
      entities: [
        //"src/entity/**/*.ts"
        __dirname + '/**/*.entity{.ts,.js}'
      ]
    }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
