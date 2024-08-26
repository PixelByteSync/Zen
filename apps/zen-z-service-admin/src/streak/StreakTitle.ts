import { Streak as TStreak } from "../api/streak/Streak";

export const STREAK_TITLE_FIELD = "id";

export const StreakTitle = (record: TStreak): string => {
  return record.id?.toString() || String(record.id);
};
