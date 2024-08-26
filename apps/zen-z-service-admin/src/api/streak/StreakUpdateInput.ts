import { InputJsonValue } from "../../types";

export type StreakUpdateInput = {
  currentStreak?: number | null;
  longestStreak?: number | null;
  milestones?: InputJsonValue;
};
