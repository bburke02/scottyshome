import React, { useState, useEffect } from "react";
import "../../../src/style.css";

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
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
        color: "white",
      }}
    >
      <h3>Please look at the map below to see where I am from!</h3>
      <div
        id="mapid"
        style={{
          height: "70vh",
          width: "600px",

          borderStyle: "solid",
          borderRadius: "20px",
        }}
      ></div>
    </div>
  );
};

export default Location;
