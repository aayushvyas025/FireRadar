import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import envVariables from "../../constants/envVariables";

function Map({ center, zoom, style, markerPosition }) {
  const { mapUrl } = envVariables;
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom} style={style}>
        <TileLayer
          url={mapUrl}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={markerPosition} />
      </MapContainer>
    </div>
  );
}

export default Map;
