import { Model, ObjectId, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreatePartyDto } from './dto/create-party.dto';
import { UpdatePartyDto } from './dto/update-party.dto';
import { Party, PartyDocument } from './schemas/party.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PartiesService {
  constructor(
   @InjectModel(Party.name) private partyModel: Model<PartyDocument>) {}

  async create(createPartyDto: CreatePartyDto): Promise<boolean> {
    try {
      const party = new this.partyModel({
        postId: createPartyDto.postId,
        partyTitle: createPartyDto.partyTitle,
        joinable: createPartyDto.joinable,
        intraId: createPartyDto.intraId,
        peopleNum: createPartyDto.peopleNum,
        createdAt: Date.now(),
        updatedAt: Date.now()
      });
      await party.save();
      return true;
    } catch(err) {
      console.log(err);
    }
  }

  async findAll(postId: string): Promise<Party[]> {
    try {
      const result = await this.partyModel.find({
        postId: { $eq: postId } 
      }).exec();
      console.log("get parties");
      return result;
    } catch(err) {
      console.log(err);
    }
  }

  async findOne(id: string): Promise<Party> {
    try {
      const result = await this.partyModel.findById(id).exec();
      console.log("get party");
      return result;
    } catch(err) {
      console.log(err);
    }
  }

  async update(id: string, updatePartyDto: UpdatePartyDto): Promise<boolean> {
    try {
      await this.partyModel.findByIdAndUpdate(
        { _id: id },
        { 
          postId: id,
          partyTitle: updatePartyDto.partyTitle,
          joinable: updatePartyDto.joinable,
          intarId: updatePartyDto.intraId,
          peopleNum: updatePartyDto.peopleNum,
          updatedAt: Date.now()
        }
      );
      return true;
    } catch(err) {
      console.log(err);
    }
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.partyModel.findByIdAndDelete(id).exec();
      return true;
    } catch(err) {
      console.log(err);
    }
  }
}
