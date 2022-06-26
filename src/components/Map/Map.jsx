import React, { useMemo } from "react";
import { MapContainer} from "react-leaflet";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import { GoogleProvider } from 'leaflet-geosearch';
import SearchControl from "../SearchControl/SearchControl";
import "./Map.scss";
import 'leaflet/dist/leaflet.css';

const center = [51.505, -0.09]
const zoom = 13

const provider = new GoogleProvider({
  params: {
    key: '__YOUR_GOOGLE_KEY__',
  },
});

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
        <SearchControl
          provider={provider}
          autoClose={false}
          searchLabel={"Enter address, please"}
        />
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

