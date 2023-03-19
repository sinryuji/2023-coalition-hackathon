import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { PostsModule } from '../posts/posts.module';
import { PostsService } from '../posts/posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from '../posts/schemas/post.schema';
import { Comment, CommentSchema } from '../comments/schemas/comment.schema';
import { Party, PartySchema } from '../parties/schemas/party.schema';

@Module({
  imports: [PostsModule, 
    MongooseModule.forFeature([
      { name: Post.name, schema: PostSchema },
      { name: Comment.name, schema: CommentSchema },
      { name: Party.name, schema: PartySchema }
      ])
  ],
  controllers: [],
  providers: [TaskService, PostsService],
})
export class TaskModule {}
