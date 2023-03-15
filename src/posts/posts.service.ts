import { Model, ObjectId, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from './schemas/post.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private PostModel: Model<PostDocument>
 ) {}

  async create(createPostDto: CreatePostDto): Promise<boolean> {
    try {

    } catch(err) {
      console.log('error...');
    }
    return true;
  }

  async findAll(): Promise<Post[]> {
    try {
      const result = await this.PostModel.find().exec();
      return result;
    } catch (err) {
      console.log('error...');
    }
  }

  async findOne(id: string): Promise<Post> {
    try {
      const result = await this.PostModel.findById(id).exec();
      return result;
    } catch (err) {
      console.log('error...');
    }
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
