import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import envVariables from "../../constants/envVariables";
import LocationMarker from "../LocationMarker/LocationMarker";
import useFetchFireEvents from "../../hooks/useFetchFireEvents";
import { useEffect } from "react";

const { mapUrl } = envVariables;

function Map({ center, zoom, style, position, maxBounds }) {
  const { fetchingWildFireEvents, events, apiResponse } = useFetchFireEvents();
 async function handleFetching() {
   
 }
  useEffect(() => {
    fetchingWildFireEvents();
  }, []); 

  console.log(events)

  return (
    <div className="map">
      <MapContainer
        center={center}
        zoom={zoom}
        style={style}
        maxBounds={maxBounds}
      >
        <TileLayer
          url={mapUrl}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker position={center} />
      </MapContainer>
    </div>
  );
}

export default Map;
