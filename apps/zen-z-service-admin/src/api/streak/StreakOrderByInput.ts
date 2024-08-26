import { SortOrder } from "../../util/SortOrder";

export type StreakOrderByInput = {
  createdAt?: SortOrder;
  currentStreak?: SortOrder;
  id?: SortOrder;
  longestStreak?: SortOrder;
  milestones?: SortOrder;
  updatedAt?: SortOrder;
};
