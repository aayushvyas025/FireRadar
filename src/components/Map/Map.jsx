import envVariables from "../../constants/envVariables";
import LocationMarker from "../LocationMarker/LocationMarker";
import useFetchFireEvents from "../../hooks/useFetchFireEvents";
import { useEffect } from "react";

const { mapUrl } = envVariables;

function Map({ center, zoom, style, position }) {
  const { fetchingWildFireEvents, events, apiResponse } = useFetchFireEvents();

  useEffect(() => {
    fetchingWildFireEvents();
  }, []);


  return (
    <div className="map">
    
    </div>
  );
}

export default Map;
