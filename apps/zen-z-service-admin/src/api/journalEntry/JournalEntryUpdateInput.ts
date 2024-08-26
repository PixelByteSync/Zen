import { InputJsonValue } from "../../types";

export type JournalEntryUpdateInput = {
  content?: string | null;
  isPublic?: boolean | null;
  tags?: InputJsonValue;
  title?: string | null;
};
