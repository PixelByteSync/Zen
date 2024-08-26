import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HabitList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Habits"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="completionDates" source="completionDates" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="goalFrequency" source="goalFrequency" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="progress" source="progress" />
        <TextField label="reminders" source="reminders" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
