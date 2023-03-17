import { Model, ObjectId, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CommentsService {
  constructor(
   @InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {}

  async create(postId: string, createCommentDto: CreateCommentDto): Promise<boolean> {
    try {
      const comment = new this.commentModel({
        postId: postId,
        content: createCommentDto.content,
        intraId: createCommentDto.intraId,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
      await comment.save();
      return true;
    } catch(err) {
      console.log(err);
    }
  }

  async findAll(postId: string): Promise<Comment[]> {
    try {
      const result = await this.commentModel.find({
        postId: { $eq: postId } 
      }).exec();
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto): Promise<boolean> {
    try {
      await this.commentModel.findByIdAndUpdate(
        { _id: id },
        { 
          postId: id,
          content: updateCommentDto.content,
          intraId: updateCommentDto.intraId,
          updatedAt: Date.now(),
        }
      );
      return true;
    } catch(err) {
      console.log(err);
    }
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.commentModel.findByIdAndDelete(id).exec();
      return true;
    } catch (err) {
      console.log(err);
    }
  }
}
