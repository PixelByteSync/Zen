import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  isCompleted?: SortOrder;
  priority?: SortOrder;
  subtasks?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
