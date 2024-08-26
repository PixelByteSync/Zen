import { InputJsonValue } from "../../types";

export type StreakCreateInput = {
  currentStreak?: number | null;
  longestStreak?: number | null;
  milestones?: InputJsonValue;
};
