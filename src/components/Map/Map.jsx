import GoogleMapReact from "google-map-react";
import envVariables from "../../constants/envVariables";
import LocationMarker from "../LocationMarker/LocationMarker";
import useFetchFireEvents from "../../hooks/useFetchFireEvents";
import { useEffect, useState } from "react";
import MapSkeleton from "../Skeleton/MapSkeleton";

const { apiKey } = envVariables;
function Map({
  center = {
    lat: 42.365,
    lng: -122.8765,
  },
  zoom = 6,
  wildfireEvents,
  loading
}) {
  return (
    <div className="map">
      {loading && <MapSkeleton />}
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
