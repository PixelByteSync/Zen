import { InputJsonValue } from "../../types";

export type TaskUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  isCompleted?: boolean | null;
  priority?: "Option1" | null;
  subtasks?: InputJsonValue;
  title?: string | null;
};
