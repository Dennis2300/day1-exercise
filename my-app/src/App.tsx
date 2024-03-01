import { useState } from "react";
import "./App.css";

import PropsDemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffect from "./exercises/UseEffect";
import FetchDemo from "./exercises/FetchDemo";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");

  function handleSelected(selected: string) {
    setSelectedView(selected);
  }

  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView === "info" ? (
              <p>All exercises for React day-1</p>
            ) : null}
            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
            {selectedView === "props1" ? (
              <PropsDemo title="Props demo1 - Chainsaw Man Characters" />
            ) : null}
            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
            {selectedView === "List Demo" ? (
              <ListDemo title="List Demo - Honkai Star Rail" />
            ) : null}
            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
            {selectedView === "React Events" ? (
              <EventDemo title="React Events - Honkai Star Rail" />
            ) : null}
            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
            {selectedView === "React Forms" ? (
              <FormUncontrolled title="React Forms" />
            ) : null}
            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
            {selectedView === "State Demo" ? (
              <StateDemo title="State Demo" />
            ) : null}
            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
            {selectedView === "State Demo 2" ? (
              <StateDemo2 title="State Demo 2" />
            ) : null}
            {selectedView === "State Demo 3" ? (
              <StateDemo3 title="State Demo 3" />
            ) : null}
            {selectedView === "UseEffect" ? (
              <UseEffect title="UseEffect" />
            ) : null}

            {selectedView === "FetchDemo" ? (
              <FetchDemo title="Fetch Demo" />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo
      </button>

      <button className="btn-w100" onClick={() => handleSelected("List Demo")}>
        List Demo
      </button>

      <button
        className="btn-w100"
        onClick={() => handleSelected("React Events")}
      >
        React Events
      </button>

    <button className="btn-w100" onClick={() => handleSelected("React Forms")}>
      React Forms
    </button>

    <button className="btn-w100" onClick={() => handleSelected("State Demo")}>
      State Demo
    </button>

    <button className="btn-w100" onClick={() => handleSelected("State Demo 2")}>
      State Demo 2
    </button>

    <button className="btn-w100" onClick={() => handleSelected("State Demo 3")}>
      State Demo 3
    </button>

    <button className="btn-w100" onClick={() => handleSelected("UseEffect")}>
      UseEffect
    </button>

    <button className="btn-w100" onClick={() => handleSelected("FetchDemo")}>
      FetchDemo
    </button>

    </>
  );
};
