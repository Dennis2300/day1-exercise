import { useEffect, useState } from "react";
import { BaseProps } from "../types";
const SERVER_URL = "http://localhost:8000/users";
const DELAY = 500;

//I did not get a infinite loop

type User = { id: number; name: string };

//Utility function to fetch a user from the server
function fetchUser(userId: number, options?: object): Promise<User> {
    //The fetch function is a built-in function in JavaScript that is used to make requests to the server
  return fetch(`${SERVER_URL}/${userId}?delay=${DELAY}`, options).then((res) =>
    res.json()
  );
}

export default function FetchDemo1({ title }: BaseProps) {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  //Use this to fetch the next user when the "Next User" button is clicked
  //Make sure you understand why we don't need useEffect here
  const fetchNextUser = async () => {
    //If the current user id is 15, we reset it to 1
    //Otherwise, we increment the user id by 1
    //This is a simple way to cycle through the users
    const nextUser = (user?.id ?? 0) + 1 <= 15 ? (user?.id ?? 0) + 1 : 1;
    //Do not set call setUserId here it will cause an extra render
    setLoading(true);
    //Fetch the next user
    //When the user is fetched, setLoading(false) is called
    const theUser = await fetchUser(nextUser);
    setLoading(false);
    //Set the user
    //This will cause the component to re-render
    setUser(theUser);
  };

  //Call fetchUser(..) immediately when the component is mounted
  //When the component is mounted, we want to fetch the user with id 1
  useEffect(() => {
    //Fetch the user with id 1
    fetchUser(userId).then((response) => {
      setUser(response);
      setLoading(false);
    });

    //This is a cleanup function
    //It is called when the component is unmounted
    //We just return an empty function
    //Dont know why we return an empty function
    return () => {};
  }, [userId]);



  return (
    <>
      <h2>{title}</h2>
    <pre>{user && JSON.stringify(user, null, 2)}</pre>
      <br />
      <button onClick={fetchNextUser}>Next User</button>
    </>
  );
}
