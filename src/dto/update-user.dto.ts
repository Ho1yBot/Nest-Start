import { IsNotEmpty, MinLength, IsString, IsEmail, IsOptional } from "class-validator";

export class UpdateUser {
  @IsNotEmpty({ message: "Name is required" })
  @MinLength(3)
  @IsString({ message: "Name must be string" })
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail({}, { message: "Пиши нормально!" })
  email?: string;
}
