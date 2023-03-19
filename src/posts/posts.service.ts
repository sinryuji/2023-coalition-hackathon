import { Model, ObjectId, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from './schemas/post.schema';
import { Comment, CommentDocument } from '../comments/schemas/comment.schema';
import { Party, PartyDocument } from '../parties/schemas/party.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    @InjectModel(Party.name) private partyModel: Model<PartyDocument>
 ) {}

  async create(createPostDto: CreatePostDto): Promise<boolean> {
    try {
      var mongoose = require('mongoose');
      const postId = mongoose.Types.ObjectId();
      const post = new this.postModel({
        _id: postId,
        title: createPostDto.title,
        menu: createPostDto.menu,
        content: createPostDto.content,
        deliveryPrice: createPostDto.deliveryPrice,
        intraId: createPostDto.intraId,
        maximumPeopleNum: createPostDto.maximumPeopleNum,
        currentPeopleNum: createPostDto.currentPeopleNum,
        matchingEndTime: createPostDto.matchingEndTime,
        available: createPostDto.available,
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

  async findByAvailable(flag: boolean): Promise<Post[]> {
    try {
      const result = await this.postModel.find({
        available: { $eq: flag } 
      }).exec();
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<boolean> {
    try {
      const ret = await this.postModel.findByIdAndUpdate(
        { _id: id },
        {
          title: updatePostDto.title,
          menu: updatePostDto.menu,
          content: updatePostDto.content,
          deliveryPrice: updatePostDto.deliveryPrice,
          intraId: updatePostDto.intraId,
          maximumPeopleNum: updatePostDto.maximumPeopleNum,
          currentPeopleNum: updatePostDto.currentPeopleNum,
          matchingEndTime: updatePostDto.matchingEndTime,
          available: updatePostDto.available,
          updatedAt: Date.now(),
        }
      ).exec();
      if (!ret)
        return false;
      return true;
    } catch (err) {
      console.log(err);
    }
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.commentModel.deleteMany({ postId: id });
      await this.partyModel.deleteMany({ postId: id });
      await this.postModel.findByIdAndDelete(id);
      return true;
    } catch (err) {
      console.log(err);
    }
  }

  async updateUnavailable(id: string): Promise<boolean> {
    try {
      const post = await this.postModel.findByIdAndUpdate(
        { _id: id },
        { available: false }
      ).exec();
      if (!post)
        return false
      return true;
    } catch (err) {
      console.log(err);
    }
  }
}
