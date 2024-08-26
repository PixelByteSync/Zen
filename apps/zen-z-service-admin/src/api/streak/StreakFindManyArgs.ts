import { StreakWhereInput } from "./StreakWhereInput";
import { StreakOrderByInput } from "./StreakOrderByInput";

export type StreakFindManyArgs = {
  where?: StreakWhereInput;
  orderBy?: Array<StreakOrderByInput>;
  skip?: number;
  take?: number;
};
