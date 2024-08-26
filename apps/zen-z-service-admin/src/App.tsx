import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { StreakList } from "./streak/StreakList";
import { StreakCreate } from "./streak/StreakCreate";
import { StreakEdit } from "./streak/StreakEdit";
import { StreakShow } from "./streak/StreakShow";
import { HabitList } from "./habit/HabitList";
import { HabitCreate } from "./habit/HabitCreate";
import { HabitEdit } from "./habit/HabitEdit";
import { HabitShow } from "./habit/HabitShow";
import { JournalEntryList } from "./journalEntry/JournalEntryList";
import { JournalEntryCreate } from "./journalEntry/JournalEntryCreate";
import { JournalEntryEdit } from "./journalEntry/JournalEntryEdit";
import { JournalEntryShow } from "./journalEntry/JournalEntryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Zen-Z Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="Streak"
          list={StreakList}
          edit={StreakEdit}
          create={StreakCreate}
          show={StreakShow}
        />
        <Resource
          name="Habit"
          list={HabitList}
          edit={HabitEdit}
          create={HabitCreate}
          show={HabitShow}
        />
        <Resource
          name="JournalEntry"
          list={JournalEntryList}
          edit={JournalEntryEdit}
          create={JournalEntryCreate}
          show={JournalEntryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
