import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {

  @Prop({
    deafult: Date.now(),
    type: mongoose.Schema.Types.Date
  })
  createdAt: number;

  @Prop({
    deafult: Date.now(),
    type: mongoose.Schema.Types.Date
  })
  updatedAt: number;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    autopopulate: true
  })
  postId: mongoose.Schema.Types.ObjectId;

  @Prop()
  content: string;

  @Prop()
  intraId: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment).set('versionKey', false);
