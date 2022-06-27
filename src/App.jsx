import React, { useState , useEffect} from "react";
import Map from "./components/Map/Map";
import Sidebar from "./components/Sidebar/Sidebar";
import DisplayLatLong from './components/DisplayLatLong/DisplayLatLong';
import * as L from "leaflet";

function App() {
  const [map, setMap] = useState(null)
  const [checked, setChecked] = useState(false);
  const [moistVis, setMoistVis] = useState(null)
  const [moistLayer, setMoistLayer] = useState(null)
  const northWest = new L.LatLng(48.4, -4.3);
  const southEast = new L.LatLng(44, 11.6);
  const bounds = new L.LatLngBounds(northWest, southEast);

  useEffect(() => {
    if (map != null)
    {
      if (checked){
        console.log(moistVis)
        map.addLayer(moistLayer)
      } else {
        map.removeLayer(moistLayer)
      }
    }
  }, [map, checked, moistLayer, moistVis])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Map setMap={setMap} setMoistLayer={setMoistLayer} bounds={bounds}></Map>
      {map ? <DisplayLatLong map={map} /> : null}
      <Sidebar
      checked={checked}
      setChecked={setChecked}
      setMoistVis={setMoistVis}
      ></Sidebar>
    </div>
  );
}

export default App;
