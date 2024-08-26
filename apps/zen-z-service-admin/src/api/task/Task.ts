import { JsonValue } from "type-fest";

export type Task = {
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  isCompleted: boolean | null;
  priority?: "Option1" | null;
  subtasks: JsonValue;
  title: string | null;
  updatedAt: Date;
};
