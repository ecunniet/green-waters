import React, {useState, useCallback, useEffect } from "react";
import "./DisplayLatLong.scss";

export default function DisplayLatLong({ map }) {
    const [position, setPosition] = useState(() => map.getCenter())
  
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
      <div className="displaylatlong--container">
        <p className="displaylatlong">
          latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
        </p>
      </div>
    )
}
