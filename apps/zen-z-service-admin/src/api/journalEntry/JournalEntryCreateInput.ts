import { InputJsonValue } from "../../types";

export type JournalEntryCreateInput = {
  content?: string | null;
  isPublic?: boolean | null;
  tags?: InputJsonValue;
  title?: string | null;
};
