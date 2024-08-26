import { JsonValue } from "type-fest";

export type Streak = {
  createdAt: Date;
  currentStreak: number | null;
  id: string;
  longestStreak: number | null;
  milestones: JsonValue;
  updatedAt: Date;
};
