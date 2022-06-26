import React, {useState, useCallback, useEffect, useMemo} from "react";
import { MapContainer} from "react-leaflet";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import "./ExternalStateExample.scss";
import 'leaflet/dist/leaflet.css';

const center = [51.505, -0.09]
const zoom = 13

function DisplayPosition({ map }) {
  const [position, setPosition] = useState(() => map.getCenter())

  const onClick = useCallback(() => {
    map.setView(center, zoom)
  }, [map])

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])

  return (
    <p>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
      <button onClick={onClick}>reset</button>
    </p>
  )
}

export default function ExternalStateExample() {
  const [map, setMap] = useState(null)

  const displayMap = useMemo(
    () => (
      <MapContainer
        style={{ height: "50vh", width: "100%" }}
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        ref={setMap}>
        <ReactLeafletGoogleLayer type={'satellite'} />
      </MapContainer>
    ),
    [],
  )

  return (
    <div>
      {map ? <DisplayPosition map={map} /> : null}
      {displayMap}
    </div>
  )
}

