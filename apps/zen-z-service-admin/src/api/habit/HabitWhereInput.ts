import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HabitWhereInput = {
  completionDates?: JsonFilter;
  description?: StringNullableFilter;
  goalFrequency?: "Option1";
  id?: StringFilter;
  name?: StringNullableFilter;
  progress?: JsonFilter;
  reminders?: JsonFilter;
};
