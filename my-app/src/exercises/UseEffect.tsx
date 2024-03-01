import { useEffect, useState } from "react";
import { BaseProps } from "../types";

/*
Exercise
part one --> provide the useEffect without a dependency array and clearInterval and see what happens
part two --> provide the useEffect with an empty dependency array and see what happens
part three --> add an return function  to clear the interval ()
part four --> Add a button to start and stop the interval via a boolean state variable to see what happens with values in the dependency array
*/

export default function UseEffectDemo({ title }: BaseProps) {
    //useState to keep track of the count
  const [count, setCount] = useState(0);

  //useState to keep track of the boolean value to start and stop the interval
    const [isRunning, setIsRunning] = useState(false);

  //useEffect to update the count every second while the component is mounted aka added to the DOM
  //the side effect is the interval that updates the count every second
  useEffect(() => {
    // setInterval returns a unique id for the interval
    //to satisfy TypeScript, we need to declare the type of i
    //NodeJS.Timeout is the type for the id returned by setInterval
    let i: NodeJS.Timeout;

    // if the isRunning state is true, then set/start the interval
    if (isRunning) {
        i = setInterval(() => {
            // taking the previous value of count and adding 1 to it
          setCount((prevCount) => prevCount + 1);
          // 1000ms = 1 second
        }, 1000);
    }

    // Cleanup function to clear the interval when the component unmounts
    //So it means that the interval will be cleared when the component is removed from the DOM
    return () => {
        // if i exists, then clear the interval
      if (i) {
        // clear the interval
          clearInterval(i);
      }
    };
    // Empty dependency array to only run the effect once when the component mounts and unmounts
    // So it means that the effect will only run once when the component is added to the DOM and once when it is removed from the DOM
    // this is a empty dependency array " }, []) "

    // if the isRunning state changes, then the effect will run again
    // So it means that the effect will run again when the isRunning state changes
    // this is a dependency array with a value " }, [isRunning] "
}, [isRunning]);

// function to toggle the isRunning state
const toggleIsRunning = () => {
    // So it means that the isRunning state will change from true to false and vice versa
    // it will change to the opposite of the current value
    setIsRunning((prevIsRunning) => !prevIsRunning);
};

// function to reset the count to 0
const resetCount = () => {
    // So it means that the count will be reset to 0
    setCount(0);
}

  return (
    <>
      <h2>{title}</h2>
      <button onClick={resetCount}>
        RESET
      </button>
      <button onClick={toggleIsRunning}>
        {isRunning ? "STOP the count" : "START the count"}
      </button>
      <p>{count}</p>
    </>
  );
}

