import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HabitServiceBase } from "./base/habit.service.base";

@Injectable()
export class HabitService extends HabitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
