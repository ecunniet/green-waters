import React from "react";
import Datavis from "../Datavis/Datavis";
import "./Sidebar.scss";

export default function Sidebar({ checked, setChecked, setMoistVis}) {
  return (
      <div id='sidebar'>
        <Datavis
        checked={checked}
        setChecked={setChecked}
        setMoistVis={setMoistVis}
        ></Datavis>
      </div>
  );
}
