import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {

  @Prop({
    required: true,
    deafult: Date.now,
    type: mongoose.Schema.Types.Date
  })
  ceratedAt: Date;

  @Prop({
    required: true,
    deafult: Date.now,
    type: mongoose.Schema.Types.Date
  })
  updatedAt: Date;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId
  })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop()
  title: string;

  @Prop()
  menu: string;

  @Prop({
    nullable: true
  })
  content: string;

  @Prop()
  deliveryPrice: number;

  @Prop()
  intraId: string;

  @Prop()
  maximumPeopleNum: number;

  @Prop()
  currentPeopleNum: number;

  @Prop()
  matchingEndTime: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
