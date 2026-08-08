import React from "react";
import { FlameKindling } from "lucide-react";

function LocationMarker({ lat, lng, onClickHandler }) {
  return (
    <div  onClick={onClickHandler}>
       <FlameKindling size={38} color="#E63946" />
    </div>
  );
}

export default LocationMarker;
