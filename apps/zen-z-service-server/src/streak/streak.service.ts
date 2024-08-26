import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StreakServiceBase } from "./base/streak.service.base";

@Injectable()
export class StreakService extends StreakServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
