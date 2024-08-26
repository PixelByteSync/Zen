import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HabitModuleBase } from "./base/habit.module.base";
import { HabitService } from "./habit.service";
import { HabitController } from "./habit.controller";
import { HabitResolver } from "./habit.resolver";

@Module({
  imports: [HabitModuleBase, forwardRef(() => AuthModule)],
  controllers: [HabitController],
  providers: [HabitService, HabitResolver],
  exports: [HabitService],
})
export class HabitModule {}
