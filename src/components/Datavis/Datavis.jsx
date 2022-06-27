import React from "react";
import "./Datavis.scss";

export default function Datavis({ checked, setChecked, setMoistVis}) {

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <h1>Informations :</h1>
      <label>
        <input
        type="checkbox"
        ref={setMoistVis}
        checked={checked}
        onChange={handleChange}
        />
        Taux de moisture
      </label>
      <p>this is {checked ? 'true': 'false'}</p>
    </div>
  );
}
