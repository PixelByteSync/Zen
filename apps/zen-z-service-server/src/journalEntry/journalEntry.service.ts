import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JournalEntryServiceBase } from "./base/journalEntry.service.base";

@Injectable()
export class JournalEntryService extends JournalEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
