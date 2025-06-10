import { Injectable } from "@nestjs/common";
import { UpdateUser } from "src/dto/update-user.dto";
import { CreateUserDto } from "src/dto/user.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async create(dto: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
      },
    });
  }

  async updateUser(id: number, dto: UpdateUser) {
    return await this.prisma.user.update({
      where: { id },
      data: {
        name: dto.name,
        email: dto.email,
      },
    });
  }
}
