import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type PartyDocument = Party & Document;

@Schema()
export class Party {

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
  partyTitle: string;

  @Prop()
  joinable: boolean;

  @Prop()
  intraId: string;

  @Prop()
  peopleNum: number;
}

export const PartySchema = SchemaFactory.createForClass(Party).set('versionKey', false);
