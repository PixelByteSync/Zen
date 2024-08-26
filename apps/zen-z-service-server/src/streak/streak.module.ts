import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StreakModuleBase } from "./base/streak.module.base";
import { StreakService } from "./streak.service";
import { StreakController } from "./streak.controller";
import { StreakResolver } from "./streak.resolver";

@Module({
  imports: [StreakModuleBase, forwardRef(() => AuthModule)],
  controllers: [StreakController],
  providers: [StreakService, StreakResolver],
  exports: [StreakService],
})
export class StreakModule {}
