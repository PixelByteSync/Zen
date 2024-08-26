import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const StreakCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="currentStreak" source="currentStreak" />
        <NumberInput step={1} label="longestStreak" source="longestStreak" />
        <div />
      </SimpleForm>
    </Create>
  );
};
