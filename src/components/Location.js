import React from "react";
import "../../src/style.css";
import "leaflet/dist/leaflet.css";
import "../../node_modules/leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Location = ({ selectedDog }) => {
  return (
    <div>
      <MapContainer
        style={{ height: "550px", width: "auto" }}
        center={{
          lat: selectedDog.coordinates.lat,
          lng: selectedDog.coordinates.lng,
        }}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[selectedDog.coordinates.lat, selectedDog.coordinates.lng]}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Location;
