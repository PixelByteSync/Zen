import { JsonValue } from "type-fest";

export type JournalEntry = {
  content: string | null;
  createdAt: Date;
  id: string;
  isPublic: boolean | null;
  tags: JsonValue;
  title: string | null;
  updatedAt: Date;
};
