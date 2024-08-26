import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { JournalEntryModuleBase } from "./base/journalEntry.module.base";
import { JournalEntryService } from "./journalEntry.service";
import { JournalEntryController } from "./journalEntry.controller";
import { JournalEntryResolver } from "./journalEntry.resolver";

@Module({
  imports: [JournalEntryModuleBase, forwardRef(() => AuthModule)],
  controllers: [JournalEntryController],
  providers: [JournalEntryService, JournalEntryResolver],
  exports: [JournalEntryService],
})
export class JournalEntryModule {}
