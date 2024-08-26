import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StreakService } from "./streak.service";
import { StreakControllerBase } from "./base/streak.controller.base";

@swagger.ApiTags("streaks")
@common.Controller("streaks")
export class StreakController extends StreakControllerBase {
  constructor(
    protected readonly service: StreakService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
