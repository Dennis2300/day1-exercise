import { useState, ChangeEvent } from "react";
import { BaseProps } from "../types";
import { User } from "../data/data";

export default function StateDemo2({ title }: BaseProps) {
  const [user, setUser] = useState<User>({
    id: 1,
    name: "Max Power",
    email: "max.power@email.com",
    isActive: true,
  });

  //Before it didnt work because we were trying to update the state directly
  //which is not allowed in React
  //We have to use the setUser function to update the state
  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {

    //To setUser we have to take the old user and update the name
    //as in we have to take the old state and update the name
    //and then set the new state
    setUser((prevUser) => ({ ...prevUser, name: e.target.value }));
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setUser((prevUser) => ({ ...prevUser, email: e.target.value }));
  }

  return (
    <>
      <h2>{title}</h2>
      <div>
        <p>ID: {user.id}</p>{" "}
      </div>
      First Name:{" "}
      <input name="name" value={user.name} onChange={handleNameChange} />
      Email: <input name="email" value={user.email} onChange={handleEmailChange} />
      Active: <input type="checkbox" checked={user.isActive} name="isActive" />
      <p style={{ marginTop: 15 }}>ID: {JSON.stringify(user.id)} </p>
      <p style={{ marginTop: 15 }}>Name: {JSON.stringify(user.name)} </p>
      <p style={{ marginTop: 15 }}>Email: {JSON.stringify(user.email)} </p>
      <p style={{ marginTop: 15 }}>Status: {JSON.stringify(user.isActive)} </p>
    </>
  );
}
