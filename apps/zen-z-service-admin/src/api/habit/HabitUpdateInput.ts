import { InputJsonValue } from "../../types";

export type HabitUpdateInput = {
  completionDates?: InputJsonValue;
  description?: string | null;
  goalFrequency?: "Option1" | null;
  name?: string | null;
  progress?: InputJsonValue;
  reminders?: InputJsonValue;
};
