import React, {useState} from "react";
import MyCharts from "../MyCharts/MyCharts";
import "./Datavis.scss";

export default function Datavis({ map,moistLayer,  stepsYear, stepsMonth, yearMap, monthMap, checked, setChecked, setMoistVis}) {
  const [{ activeSeriesIndex, activeDatumIndex }, setIndex] = useState({
    activeSeriesIndex: -1,
    activeDatumIndex: -1,
  });

  const handleChange = () => {
    // before the change so the logique is reversed
    if (map != null)
    {
      if(checked){
        map.removeLayer(moistLayer[yearMap].current)
      }else {
        map.addLayer(moistLayer[yearMap].current)
      }
    }
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
      <p>Year : {stepsYear[yearMap]}</p>
      <p>Month : {stepsMonth[monthMap]}</p>
      <div id="charts--container">
      {JSON.stringify({ activeSeriesIndex, activeDatumIndex }, null, 2)}
        <MyCharts
        elementType="line"
        setIndex={setIndex}
        interactionMode="primary"
        activeDatumIndex={activeDatumIndex}
        activeSeriesIndex={activeSeriesIndex}
        ></MyCharts>
      </div>
    </div>
  );
}
