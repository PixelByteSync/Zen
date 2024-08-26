import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HabitService } from "./habit.service";
import { HabitControllerBase } from "./base/habit.controller.base";

@swagger.ApiTags("habits")
@common.Controller("habits")
export class HabitController extends HabitControllerBase {
  constructor(
    protected readonly service: HabitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
