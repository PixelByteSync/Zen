import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const StreakEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="currentStreak" source="currentStreak" />
        <NumberInput step={1} label="longestStreak" source="longestStreak" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
