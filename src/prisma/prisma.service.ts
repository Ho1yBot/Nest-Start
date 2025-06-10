import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "generated/prisma";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  findMany() {
    throw new Error("Method not implemented.");
  }
  async onModuleInit() {
    await this.$connect();
    console.log(`Prisma is connected!`);
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log(`Prisma is disconnected!`);
  }
}
