import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const HabitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="completionDates" source="completionDates" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="goalFrequency" source="goalFrequency" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="progress" source="progress" />
        <TextField label="reminders" source="reminders" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
