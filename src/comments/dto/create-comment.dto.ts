import { IsNumber, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  postId: string;

  @IsString()
  content: string;

  @IsString()
  intraId: string;

  @IsNumber()
  createdAt: number;

  @IsNumber()
  updatedAt: number;
}
