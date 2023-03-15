import { Model, ObjectId, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from './schemas/post.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<PostDocument>
 ) {}

  async create(createPostDto: CreatePostDto): Promise<boolean> {
    try {
      const post = new this.postModel({
        title: "hi",
        menu: "chicken",
        content: "",
        deliveryPrice: 3000,
        intraId: "hyeongki",
        maximumPeopleNum: 10,
        currentPeopleNum: 1,
        matchingEndTime: Date.now(),
        avaliable: true,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
      await post.save();
    } catch(err) {
      console.log(err);
    }
    return true;
  }

  async findAll(): Promise<Post[]> {
    try {
      const result = await this.postModel.find().exec();
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  async findOne(id: string): Promise<Post> {
    try {
      const result = await this.postModel.findById(id).exec();
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<boolean> {
    try {
      await this.postModel.findByIdAndUpdate(
        { _id: id },
        { title: "hello" }
      );
      return true;
    } catch (err) {
      console.log(err);
    }
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.postModel.findByIdAndDelete(id).exec();
      return true;
    } catch (err) {
      console.log(err);
    }
  }
}
