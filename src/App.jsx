import React, { useState ,createRef,  useEffect} from "react";
import Map from "./components/Map/Map";
import Sidebar from "./components/Sidebar/Sidebar";
import TimeSlider from "./components/TimeSlider/TimeSlider";
import DisplayLatLong from './components/DisplayLatLong/DisplayLatLong';
import * as L from "leaflet";

function App() {
  const stepsYear = ["2022", "2021", "2020", "2019", "2018", "2017", "2016"];
  const stepsMonth = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  const [map, setMap] = useState(null);
  const [checked, setChecked] = useState(false);
  const [moistVis, setMoistVis] = useState(null);
  const [moistLayer, setMoistLayer] = useState([])
  const corner1 = new L.LatLng(54.9166782, -10.1763484,);
  const corner2 = new L.LatLng(39.5003247, 12.9803438);
  const bounds = new L.LatLngBounds(corner1, corner2);
  const [isInitialised, setIsInitialised] = useState(false)
  const [yearMap, setYearMap] = useState(0);
  const [monthMap, setMonthMap] = useState(0);
  const [sidebarWidth, setSidebarWidth] = useState(20)
  const [isResizing, setIsResizing] = useState(false)
  
  useEffect(() => {
    if (map != null)
    {
      if (moistLayer.length < 7){
        setMoistLayer((moistLayer) =>
          Array(7)
          .fill()
          .map((_, i) => moistLayer[i] || createRef())
        );
      // } else if (checked){
      //   // console.log(moistLayer[yearMap].current)
      //   // map.addLayer(moistLayer[yearMap].current)
      //   // si c'est checked ça doit redonner les dimensions de la map
      //   map.on('moveend', function() { 
      //     const sw = map.getBounds().getSouthWest()
      //     const ne = map.getBounds().getNorthEast()
      //     console.log(sw.lat + ' et ' + sw.lng + ' et ' + ne.lat + ' et ' + ne.lng)})
      } else if (moistLayer[0] !== null && checked === false){
          if (moistLayer[0].current !== null){
            if (isInitialised === false){
              // pas de trigger pour l'initialisation
                for (let i = 0; i < moistLayer.length; i++) {
                  console.log(moistLayer[i].current)
                  map.removeLayer(moistLayer[i].current)
                }
                setIsInitialised(true)
              }
        } 
      }
    }
  }, [map, checked, moistLayer, yearMap,isInitialised])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Map moistLayer={moistLayer} stepsYear={stepsYear} setMap={setMap} setMoistLayer={setMoistLayer} bounds={bounds}></Map>
      {map ? <DisplayLatLong map={map} /> : null}
      <Sidebar
      map={map}
      moistLayer={moistLayer}
      stepsYear={stepsYear}
      stepsMonth={stepsMonth}
      yearMap={yearMap}
      monthMap={monthMap}
      checked={checked}
      setChecked={setChecked}
      setMoistVis={setMoistVis}
      sidebarWidth={sidebarWidth}
      setSidebarWidth={setSidebarWidth}
      isResizing={isResizing}
      setIsResizing={setIsResizing}
      ></Sidebar>
      <TimeSlider
      checked={checked}
      map={map}
      moistLayer={moistLayer}
      stepsYear={stepsYear}
      stepsMonth={stepsMonth}
      yearMap={yearMap}
      setYearMap={setYearMap}
      monthMap={monthMap}
      setMonthMap={setMonthMap}></TimeSlider>
    </div>
  );
}

export default App;
