import React, { useMemo } from "react";
import { MapContainer} from "react-leaflet";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import "./Map.scss";
import 'leaflet/dist/leaflet.css';

const center = [51.505, -0.09]
const zoom = 13

export default function Map({ setMap }) {

  const displayMap = useMemo(
    () => (
      <MapContainer
        style={{ height: "100vh", width: "100%" }}
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        ref={setMap}>
        <ReactLeafletGoogleLayer type={'satellite'} />
      </MapContainer>
    ),
    [setMap],
  )

  return (
    <div>
      {displayMap}
    </div>
  )
}

