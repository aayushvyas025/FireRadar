import { FlameIcon } from "lucide-react";

function LocationMarker({ lat, lng, children }) {
  return (
    <div className="location-marker">
       <FlameIcon size={20} color="#E63946" /> 
       {children}
    </div>
  );
}

export default LocationMarker 