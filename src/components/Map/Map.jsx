import React from "react";
import { MapContainer} from "react-leaflet";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import "./Map.scss";
import 'leaflet/dist/leaflet.css';


export default function Map() {

  return (
    <div> 
      <MapContainer
        style={{ height: "50vh", width: "100%" }}
        zoom={6}
        center={[48.8773406,2.3299627]}
      >
        <ReactLeafletGoogleLayer type={'satellite'} />
      </MapContainer>
      <p>Hello</p>
    </div>
  );
}
