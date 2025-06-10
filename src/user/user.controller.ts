import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "src/dto/user.dto";
import { UpdateUser } from "src/dto/update-user.dto";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("users")
  async findAll() {
    return this.userService.findAll();
  }

  @Post("user")
  async createNewUser(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Patch("user/:id")
  async updateUser(@Param("id") id: string, @Body() dto: UpdateUser) {
    return this.userService.updateUser(+id, dto);
  }
}
