import { HabitWhereUniqueInput } from "./HabitWhereUniqueInput";
import { HabitUpdateInput } from "./HabitUpdateInput";

export type UpdateHabitArgs = {
  where: HabitWhereUniqueInput;
  data: HabitUpdateInput;
};
