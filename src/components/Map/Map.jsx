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
  loading,
}) {
  const geoLocations = wildfireEvents
    .slice(0, 100)
    .map((wildfire) => wildfire.geometries);
  const markers = geoLocations.map(
    (geoCoordinates) => geoCoordinates[0].coordinates,
  ); 

  console.log(geoLocations); 
  console.log(markers); 

  return (
    <div className="map">
      {loading && <MapSkeleton />}
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers.map(([longitude, latitude], index) => (
          <LocationMarker key={index} lat={latitude} lng={longitude} />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
