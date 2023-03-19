import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Post } from '../posts/schemas/post.schema';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class TaskService {
  constructor(private readonly postsService: PostsService) {}

  @Cron('0 * * * * *')
  async overTimeUnavailable() {
    try {
      console.log("Cron: overTimeUnavailable!!");
      const date = new Date();
      const posts: Post[] = await this.postsService.findByAvailable(true);
      for (let i: number = 0; i < posts.length; i++) {
        if (date.getTime() >= posts[i].matchingEndTime) {
          await this.postsService.updateUnavailable(posts[i]._id.toString())
          console.log("Cron: unavailavle!!");
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  @Cron('0 * * * * *')
  async overTimeDelete() {
    try {
      console.log("Cron: overTimeDelete!!");
      const date = new Date();
      date.setHours(date.getHours() + 2);
      const posts: Post[] = await this.postsService.findByAvailable(false);
      for (let i: number = 0; i < posts.length; i++) {
        if (date.getTime() >= posts[i].matchingEndTime) {
          await this.postsService.remove(posts[i]._id.toString());
          console.log("Cron: delete!!");
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}
