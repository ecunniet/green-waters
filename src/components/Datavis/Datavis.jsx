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
    <div className="datavis-bigger--container">
      <div className="title--container">
      <h1>Informations</h1>
      <h2>{stepsMonth[monthMap]} {stepsYear[yearMap]}</h2>
      </div>
      <div className="checkbox--container">
      <label>
        <input
        type="checkbox"
        ref={setMoistVis}
        checked={checked}
        onChange={handleChange}
        />
        Carte avec les taux de Soil Moisture
      </label>
      </div>
      <h4>Moyenne des taux de Soil Moisture sur la zone affichée à gauche sur 7 ans.</h4>
      <div id="charts--container">
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
