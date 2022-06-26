import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { GeoSearchControl } from "leaflet-geosearch";
import 'leaflet-geosearch/dist/geosearch.css';
import './SearchControl.scss'

const SearchControl = (props) => {
    const map2 = useMap();

    useEffect(() => {
      const searchControl = new GeoSearchControl({
        provider: props.provider,
        ...props
      });
  
      map2.addControl(searchControl);
      return () => map2.removeControl(searchControl);
    }, [map2, props]);
  
    return null;
  };

export default SearchControl;