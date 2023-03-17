import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { PostsModule } from '../posts/posts.module';
import { PostsService } from '../posts/posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from '../posts/schemas/post.schema';

@Module({
  imports: [PostsModule, MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
  controllers: [],
  providers: [TaskService, PostsService],
})
export class TaskModule {}
