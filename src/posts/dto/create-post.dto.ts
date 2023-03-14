import { IsNumber, IsString, IsDate, IsBoolean, IsOptional } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  menu: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsNumber()
  delivery_price: number;

  @IsString()
  intra_id: string;

  @IsNumber()
  maximum_people_num: number;

  @IsNumber()
  current_people_num: number;

  @IsDate()
  matching_end_date: Date;

  @IsBoolean()
  avaliable: boolean;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;
}
