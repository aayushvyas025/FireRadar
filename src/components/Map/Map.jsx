import GoogleMapReact from "google-map-react";
import envVariables from "../../constants/envVariables";
import LocationMarker from "../LocationMarker/LocationMarker";
import useFetchFireEvents from "../../hooks/useFetchFireEvents";
import { useEffect, useState } from "react";
import MapSkeleton from "../Skeleton/MapSkeleton";
import LocationInfo from "../LocationInfo/LocationInfo";

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

  const eventInfo = wildfireEvents
    .slice(0, 100)
    .map((wildfire) => wildfire.title);

  return (
    <div className="map">
      {loading && <MapSkeleton />}
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers.map(([longitude, latitude], index) => (
          <LocationMarker key={index} lat={latitude} lng={longitude}>
            {eventInfo.map((title, index) => (
              <LocationInfo key={index} title={title} />
            ))}
          </LocationMarker>
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
