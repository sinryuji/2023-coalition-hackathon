import { IsNumber, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreatePartyDto {
  @IsString()
  postId: string;

  @IsString()
  partyTitle: string;

  @IsBoolean()
  joinable: boolean;

  @IsString()
  intraId: string;

  @IsNumber()
  popleNum: number;

  @IsNumber()
  createdAt: number;

  @IsNumber()
  updatedAt: number;
}
