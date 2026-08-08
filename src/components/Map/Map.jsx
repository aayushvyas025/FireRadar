import GoogleMapReact from "google-map-react";
import envVariables from "../../constants/envVariables";
import LocationMarker from "../LocationMarker/LocationMarker";
import useFetchFireEvents from "../../hooks/useFetchFireEvents";
import { useEffect } from "react";

const { apiKey } = envVariables;
function Map({
  center = {
    lat: 42.365,
    lng: -122.8765,
  },
  zoom = 6,
  wildfireEvents
}) {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
