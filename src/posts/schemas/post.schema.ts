import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {

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

//  @Prop({
//    type: mongoose.Schema.Types.ObjectId
//  })
//  _id: mongoose.Schema.Types.ObjectId;

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

  @Prop({
    type: mongoose.Schema.Types.Date
  })
  matchingEndTime: number;

  @Prop({
    type: mongoose.Schema.Types.Boolean
  })
  avaliable: boolean;
}

export const PostSchema = SchemaFactory.createForClass(Post).set('versionKey', false);
