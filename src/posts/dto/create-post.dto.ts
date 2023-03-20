import { IsNumber, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  menu: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsNumber()
  deliveryPrice: number;

  @IsString()
  intraId: string;

  @IsNumber()
  maximumPeopleNum: number;

  @IsNumber()
  currentPeopleNum: number;

  @IsNumber()
  matchingEndTime: number;

  @IsBoolean()
  available: boolean;

  @IsNumber()
  createdAt: number;

  @IsNumber()
  updatedAt: number;

  @IsBoolean()
  joinable: boolean;
}
