import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type StreakWhereInput = {
  currentStreak?: IntNullableFilter;
  id?: StringFilter;
  longestStreak?: IntNullableFilter;
  milestones?: JsonFilter;
};
