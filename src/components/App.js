import React, { useState } from "react";

import Header from "./Header";
import Search from "./Search";
import AboutUs from "./AboutUs";
import { Dropdown } from "./Dropdown";
import DropdownRender from "./DropdownRender";
import Location from "./Location/Location";
import scottyProfile from "../img/scottyProfile.jpg";
import daisyProfile from "../img/daisyProfile.jpg";
import sammyProfile from "../img/sammyProfile.JPG";
import rosieProfile from "../img/rosieProfile.jpg";
import daisyWindow from "../img/daisyWindow.png";
import duchessProfile from "../img/duchessProfile.jpg";

import "../../src/style.css";

const sideBarItems = [
  {
    title: "Home",
    content: "",
  },
  {
    title: "About Us",
    content: "",
  },
  {
    title: "Adventure Gallery",
    content: "",
  },
  {
    title: "Videos",
    content: "",
  },
];

const dogs = [
  {
    key: 1,
    name: "Scotty",
    breed: "Havanese",
    aboutMe:
      "My name is Scotty and I am three years old. I like to play with tennis balls, play tug, and wrestle with my friends. I have hip dysplasia, so sometimes it is uncomfortable when I run. This app was created for me to help show on the map where me and all my friends came from. Take a look at the map to see where I am originally from!",
    profilePic: scottyProfile,
    age: 3,
    coordinates: {
      lat: 40.5545,
      lng: -81.9179,
    },
  },
  {
    key: 2,
    name: "Daisy",
    breed: "American Foxhound",
    aboutMe:
      "My name is Daisy and I am two years old. I was rescued by my human parents from Alabama, along with my sister Rosie. I like to eat anything and everything. I  beg for food when I am not supposed to. I am faster than my brother Scotty, but I always let him catch me when we are playing tag in the backyard. Take a look at the map to see where I am originally from!",
    profilePic: daisyProfile,
    age: 2,
    coordinates: {
      lat: 30.6954,
      lng: -88.0399,
    },
  },

  {
    key: 3,
    name: "Rosie",
    breed: "American Foxhound",
    aboutMe:
      "My name is Rosie and I am two years old. I was rescued by my human mommy and daddy from Alabama, along with my sister, Daisy. I love to destroy toys even though my mommy doesn't like that. I like to play with sister Daisy and my best friend Scotty. We usually get together once a week for a long walk on the street and some chasing and wrestling outside! Take a look at the map to see where I am originally from!",
    profilePic: rosieProfile,
    age: 2,
    coordinates: {
      lat: 30.6954,
      lng: -88.0399,
    },
  },
  {
    key: 4,
    name: "Sammy",
    breed: "Beagle",
    aboutMe:
      "My name is Sammy and I don't even know how old I am. I was rescued by my human mommies from a shelter. I love to eat. I howl when I want to have food. I get sad when my parents leave me, and get overcome with emotion when they come home. I don't like to play too much, but when I do I get a burst of energy for 10 seconds Take a look at the map to see where I am originally from!",
    profilePic: sammyProfile,
    age: 7,
    coordinates: {
      lat: 41.7004,
      lng: -73.921,
    },
  },
  {
    key: 5,
    name: "Duchess",
    breed: "West Highland Terrier",
    aboutMe:
      "MMy name is Duchess. Take a look at the map to see where I am originally from!",
    profilePic: duchessProfile,
    age: 6,
    coordinates: {
      lat: 41.019,
      lng: -73.7982,
    },
  },
];

const App = () => {
  const [selected, setSelected] = useState(dogs[0]);
  const [aboutUs, setAboutUs] = useState("");

  return (
    <div
      style={{
        boxSizing: "border-box",

        margin: "0",
        padding: "0",
      }}
    >
      <Header />

      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",

          alignItems: "flexStart",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            color: "#1366B2",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AboutUs aboutUs={aboutUs} />
          <Dropdown
            dogs={dogs}
            selected={selected}
            onSelectedChange={setSelected}
          />

          <DropdownRender selectedDog={selected} dogs={dogs} />
        </div>
        {/* <div style={{}}>
          <img
            src={daisyWindow}
            style={{
              height: "500px",
              gridColumn: "2 / span 2",
              width: "auto",
              borderRadius: "15px",
            }}
          />
        </div> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(180deg, rgba(35,132,212,1) 0%, rgba(171,215,254,1) 100%)",
            color: "white",
          }}
        >
          <Location selectedDog={selected} id="mapid" />
          <Search selectedDog={selected} />
        </div>
      </div>
    </div>
  );
};
export default App;
