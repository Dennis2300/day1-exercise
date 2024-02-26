import { BaseProps } from "../types";
import Profile from "../components/Profile";
import { useState } from "react";

export default function PropsDemo({ title }: BaseProps) {
  const [showHorizontal, setShowHorizontal] = useState(false);
  return (
    <>
      <h2>{title}</h2>
      Direction:{" "}
      <input
        type="checkbox"
        checked={showHorizontal}
        onChange={() => setShowHorizontal(!showHorizontal)}
      />
      <Profile
        name="Makima"
        email="maki@div4.com"
        isActive={true}
        singleLine={showHorizontal}
      />
      {/** Add two or more Profiles, but not until you actually have implemented <Profile />   */}
      <Profile
        name="Denji"
        email="denj@div4.com"
        isActive={true}
        singleLine={showHorizontal}
      />
      <Profile
        name="Power"
        email="powe@div4.com"
        isActive={true}
        singleLine={showHorizontal}
      />
      <Profile
        name="Aki"
        email="aki0@div4.com"
        isActive={true}
        singleLine={showHorizontal}
      />
      <Profile
        name="Kobeni"
        email="kobe@div4.com "
        isActive={false}
        singleLine={showHorizontal}
      />
    </>
  );
}
