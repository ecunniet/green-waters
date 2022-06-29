import React, {useState} from "react";
import MyCharts from "../MyCharts/MyCharts";
import "./Datavis.scss";

export default function Datavis({ map,moistLayer,  stepsYear, stepsMonth, yearMap, monthMap, checked, setChecked, setMoistVis}) {
  const [{ activeSeriesIndex, activeDatumIndex }, setIndex] = useState({
    activeSeriesIndex: -1,
    activeDatumIndex: -1,
  });
  const [showGraph, setShowGraph] = useState(false)
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  function FetchApi(nw, se){
    const url = "http://34.88.30.209/api/(" + nw.lat + ","+ nw.lng+ ")/(" + se.lat +","+se.lng+")/['2016']"
    console.log(url)
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.output);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    }

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

  const onHandleGetGraphData = () => {
    if (map != null) {
        const nw = map.getBounds().getNorthWest()
        const se = map.getBounds().getSouthEast()
        console.log(nw.lat + ' et ' + nw.lng + ' et ' + se.lat + ' et ' + se.lng)
        console.log('je call')
        setIsLoaded(false)
        FetchApi(nw,se)
    }
    setShowGraph(true)
  }
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
      <h4>{!showGraph ? "Analyse des moyennes" : "Moyenne"} des taux de Soil Moisture sur la zone affichée à gauche sur 7 ans.</h4>
      <button onClick={onHandleGetGraphData}>{!showGraph ? "Lancez l'analyse": "Analyser de nouveau sur la zone"}</button>
      <div id="charts--container" style={!showGraph ? {display:'none'} : {display:'block'}}>
        <MyCharts
        error={error}
        isLoaded={isLoaded}
        items={items}
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
