/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StreakWhereInput } from "./StreakWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class StreakCountArgs {
  @ApiProperty({
    required: false,
    type: () => StreakWhereInput,
  })
  @Field(() => StreakWhereInput, { nullable: true })
  @Type(() => StreakWhereInput)
  where?: StreakWhereInput;
}

export { StreakCountArgs as StreakCountArgs };
