import { JournalEntry as TJournalEntry } from "../api/journalEntry/JournalEntry";

export const JOURNALENTRY_TITLE_FIELD = "title";

export const JournalEntryTitle = (record: TJournalEntry): string => {
  return record.title?.toString() || String(record.id);
};
