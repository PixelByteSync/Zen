import { InputJsonValue } from "../../types";

export type TaskCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  isCompleted?: boolean | null;
  priority?: "Option1" | null;
  subtasks?: InputJsonValue;
  title?: string | null;
};
