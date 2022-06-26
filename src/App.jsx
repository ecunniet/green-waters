import React, { useState } from "react";
import Map from "./components/Map/Map";
import Sidebar from "./components/Sidebar/Sidebar";
import DisplayLatLong from './components/DisplayLatLong/DisplayLatLong';
import './App.scss';

function App() {
  const [map, setMap] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Map setMap={setMap}></Map>
      {map ? <DisplayLatLong map={map} /> : null}
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
