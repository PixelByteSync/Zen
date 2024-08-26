import { HabitWhereInput } from "./HabitWhereInput";
import { HabitOrderByInput } from "./HabitOrderByInput";

export type HabitFindManyArgs = {
  where?: HabitWhereInput;
  orderBy?: Array<HabitOrderByInput>;
  skip?: number;
  take?: number;
};
