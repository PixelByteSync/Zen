import { JsonValue } from "type-fest";

export type Habit = {
  completionDates: JsonValue;
  createdAt: Date;
  description: string | null;
  goalFrequency?: "Option1" | null;
  id: string;
  name: string | null;
  progress: JsonValue;
  reminders: JsonValue;
  updatedAt: Date;
};
