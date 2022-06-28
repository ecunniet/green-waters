import React, { useMemo } from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import { GoogleProvider } from 'leaflet-geosearch';
import SearchControl from "../SearchControl/SearchControl";
import "./Map.scss";
import 'leaflet/dist/leaflet.css';

const center = [51.505, -0.09]
const zoom = 7

const provider = new GoogleProvider({
  params: {
    key: process.env.REACT_APP_GOOGLE_API_KEY,
  },
});

export default function Map({ stepsYear, setMap, moistLayer, setMoistLayer, bounds }) {
  
  const displayMap = useMemo(
    () => (
      <MapContainer
      id="divmap"
      style={{ height: "100vh",  width: '80%'}}
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      ref={setMap}>
        <ReactLeafletGoogleLayer type={'satellite'} />
        {stepsYear.map((year, index) => {
        return (
          <TileLayer
          key={index}
          ref={moistLayer[index]}
          transparent={true}
          maxNativeZoom={15}
          bounds={bounds}
          maxBounds={bounds}
          data-index={index}
          url={"https://storage.googleapis.com/tiles-data/moisture/" + year + "/{z}/{x}/{-y}.png"}/>)
        })}
        <SearchControl
          provider={provider}
          showMarker={false}
          animateZoom={true}
          autoClose={true}
          searchLabel={"Enter address, please"}
        />
      </MapContainer>
    ),
    [setMap, bounds, stepsYear, moistLayer],
  )

  return (
    <div>
      {displayMap}
    </div>
  )
}

