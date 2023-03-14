import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

//@Module({
//  imports: [
//    MongooseModule.forRootAsync({
//      imports: [ConfigModule],
//      useFactory: async (configService: ConfigService) => ({
//        uri: configService.get<string>('MONGO_URL'),
//      }),
//      inject: [ConfigService],
//    }),
//    PostsModule],
//  controllers: [AppController],
//  providers: [AppService],
//})
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URL'),
      }),
      inject: [ConfigService],
    }),
    PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
