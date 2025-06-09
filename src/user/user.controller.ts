import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "src/dto/user.dto";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  //   @Get()
  //   async getAllUsers() {
  //     return this.UserServiceuser.findMany();
  //   }

  @Post("user")
  async createNewRecord(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }
}
