import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/dto/user.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
      },
    });
  }
}
