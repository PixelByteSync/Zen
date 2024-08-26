import { Habit as THabit } from "../api/habit/Habit";

export const HABIT_TITLE_FIELD = "name";

export const HabitTitle = (record: THabit): string => {
  return record.name?.toString() || String(record.id);
};
