import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { PostService } from "./post.service";
import { CreatePostDto } from "src/dto/create-post.dto";

@Controller("posts")
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() dto: CreatePostDto) {
    return await this.postService.create(dto);
  }

  @Get()
  async findAll(
    @Query("page") page = 1,
    @Query("limit") limit = 10,
    @Query("categoryID") categoryID?: number,
    @Query("authorID") authorID?: number,
  ) {
    return this.postService.findAll(page, limit, categoryID, authorID);
  }
}
