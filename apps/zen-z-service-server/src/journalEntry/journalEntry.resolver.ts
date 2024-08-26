import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { JournalEntryResolverBase } from "./base/journalEntry.resolver.base";
import { JournalEntry } from "./base/JournalEntry";
import { JournalEntryService } from "./journalEntry.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => JournalEntry)
export class JournalEntryResolver extends JournalEntryResolverBase {
  constructor(
    protected readonly service: JournalEntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
