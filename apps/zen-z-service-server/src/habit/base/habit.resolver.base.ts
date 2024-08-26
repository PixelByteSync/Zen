/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Habit } from "./Habit";
import { HabitCountArgs } from "./HabitCountArgs";
import { HabitFindManyArgs } from "./HabitFindManyArgs";
import { HabitFindUniqueArgs } from "./HabitFindUniqueArgs";
import { CreateHabitArgs } from "./CreateHabitArgs";
import { UpdateHabitArgs } from "./UpdateHabitArgs";
import { DeleteHabitArgs } from "./DeleteHabitArgs";
import { HabitService } from "../habit.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Habit)
export class HabitResolverBase {
  constructor(
    protected readonly service: HabitService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Habit",
    action: "read",
    possession: "any",
  })
  async _habitsMeta(
    @graphql.Args() args: HabitCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Habit])
  @nestAccessControl.UseRoles({
    resource: "Habit",
    action: "read",
    possession: "any",
  })
  async habits(@graphql.Args() args: HabitFindManyArgs): Promise<Habit[]> {
    return this.service.habits(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Habit, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Habit",
    action: "read",
    possession: "own",
  })
  async habit(
    @graphql.Args() args: HabitFindUniqueArgs
  ): Promise<Habit | null> {
    const result = await this.service.habit(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Habit)
  @nestAccessControl.UseRoles({
    resource: "Habit",
    action: "create",
    possession: "any",
  })
  async createHabit(@graphql.Args() args: CreateHabitArgs): Promise<Habit> {
    return await this.service.createHabit({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Habit)
  @nestAccessControl.UseRoles({
    resource: "Habit",
    action: "update",
    possession: "any",
  })
  async updateHabit(
    @graphql.Args() args: UpdateHabitArgs
  ): Promise<Habit | null> {
    try {
      return await this.service.updateHabit({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Habit)
  @nestAccessControl.UseRoles({
    resource: "Habit",
    action: "delete",
    possession: "any",
  })
  async deleteHabit(
    @graphql.Args() args: DeleteHabitArgs
  ): Promise<Habit | null> {
    try {
      return await this.service.deleteHabit(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}