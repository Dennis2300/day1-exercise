import { BaseProps } from "../types";
import { users as usersFromDB, User } from "../data/data";
import { useState } from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";
type Props = BaseProps;

export default function StateDemo3({ title }: Props) {
  const [users, setUser] = useState<User[]>(usersFromDB || []);
  //Derived value. No need for a useState here
  const nextId =
    1 +
    users.reduce(
      (max: number, user: User) =>
        user.id && max && user.id > max ? user.id : max,
      users[0]?.id || 0
    );

  const onSubmitUser = (newUser: User) => {
    newUser.id = nextId;
    //This is the only place you have to change something
    setUser((prevUsers) => [...prevUsers, newUser]);
    users.push(newUser);
    console.log(users);
  };

  return (
    <>
      <h2>{title}</h2>
      <UserTable title="Users" users={users} />
      <UserForm title="Add User" onSubmitUser={onSubmitUser} />
    </>
  );
}
