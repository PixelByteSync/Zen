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
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { StreakOrderByInput } from "./StreakOrderByInput";

@ArgsType()
class StreakFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => StreakWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => StreakWhereInput, { nullable: true })
  @Type(() => StreakWhereInput)
  where?: StreakWhereInput;

  @ApiProperty({
    required: false,
    type: [StreakOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [StreakOrderByInput], { nullable: true })
  @Type(() => StreakOrderByInput)
  orderBy?: Array<StreakOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { StreakFindManyArgs as StreakFindManyArgs };