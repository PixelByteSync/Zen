import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type JournalEntryWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  isPublic?: BooleanNullableFilter;
  tags?: JsonFilter;
  title?: StringNullableFilter;
};
