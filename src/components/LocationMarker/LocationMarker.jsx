import React from 'react'
import { Marker, Popup } from 'react-leaflet'

function LocationMarker({position, popupMessage }) {
  return (
    <Marker position={position} >
        <Popup>
            {popupMessage}
        </Popup>
    </Marker>
  )
}

export default LocationMarker