import { IsNotEmpty, IsInt, IsString } from "class-validator";

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsInt()
  authorID: number;

  @IsInt()
  categoryID: number;
}
