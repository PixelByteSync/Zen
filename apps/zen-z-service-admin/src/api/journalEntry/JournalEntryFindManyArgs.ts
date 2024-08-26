import { JournalEntryWhereInput } from "./JournalEntryWhereInput";
import { JournalEntryOrderByInput } from "./JournalEntryOrderByInput";

export type JournalEntryFindManyArgs = {
  where?: JournalEntryWhereInput;
  orderBy?: Array<JournalEntryOrderByInput>;
  skip?: number;
  take?: number;
};
