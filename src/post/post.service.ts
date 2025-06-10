import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "src/dto/create-post.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePostDto) {
    return await this.prisma.post.create({
      data: {
        title: dto.title,
        content: dto.content,
        authorID: dto.authorID,
        categoryID: dto.categoryID,
      },
    });
  }

  async findAll(
    page: number,
    limit: number,
    categoryID?: number,
    authorID?: number,
  ) {
    const skip = (page - 1) * limit;
    return await this.prisma.post.findMany({
      where: { categoryID, authorID },
      skip,
      take: limit,
    });
  }
}
