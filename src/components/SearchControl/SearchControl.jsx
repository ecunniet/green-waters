import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { GeoSearchControl } from "leaflet-geosearch";
import 'leaflet-geosearch/dist/geosearch.css';
import './SearchControl.scss'

const SearchControl = (props) => {
    const map = useMap();
  
    useEffect(() => {
      const searchControl = new GeoSearchControl({
        provider: props.provider,
        ...props
      });
  
      map.addControl(searchControl);
      return () => map.removeControl(searchControl);
    }, [props]);
  
    return null;
  };

export default SearchControl;