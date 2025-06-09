import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({ message: "Name is required" })
  @MinLength(3)
  @IsString({ message: "Name must be string" })
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: "Пиши нормально!" })
  email: string;
}
