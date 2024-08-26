import { SortOrder } from "../../util/SortOrder";

export type HabitOrderByInput = {
  completionDates?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  goalFrequency?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  progress?: SortOrder;
  reminders?: SortOrder;
  updatedAt?: SortOrder;
};
