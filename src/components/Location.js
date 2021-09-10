import React, { useState, useEffect } from "react";
import "../../src/style.css";

import * as L from "leaflet";

let mymap;

const Location = ({ selectedDog }) => {
  const [lat, setLat] = useState(selectedDog.coordinates.lat);
  const [lng, setLng] = useState(selectedDog.coordinates.lng);

  useEffect(() => {
    if (mymap === undefined) {
      mymap = L.map("mapid").setView([lat, lng], 13);

      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1IjoiYmJ1cmtlMDIiLCJhIjoiY2t0YnU0eG11MXp1bjJwcW5tanJpdmFnMiJ9.x1d2vZwevHEjazCxkAyHGA",
        }
      ).addTo(mymap);
    } else {
      mymap.remove();
      setLat(selectedDog.coordinates.lat);
      setLng(selectedDog.coordinates.lng);
      console.log([lat, lng]);
      mymap = L.map("mapid").setView([lat, lng], 13);

      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1IjoiYmJ1cmtlMDIiLCJhIjoiY2t0YnU0eG11MXp1bjJwcW5tanJpdmFnMiJ9.x1d2vZwevHEjazCxkAyHGA",
        }
      ).addTo(mymap);
    }
  }, [selectedDog, lat, lng]);

  return (
    <div
      id="mapid"
      style={{
        height: "70vh",
        width: "50vw",
        marginTop: "20px",
        border: "3px solid #73AD21",
      }}
    ></div>
  );
};

export default Location;
