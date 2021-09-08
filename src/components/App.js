import React, { useState } from "react";
import Search from "./Search";
import Header from "../Header";
import Sidebar from "./Sidebar";
import { Dropdown } from "./Dropdown";
import DropdownRender from "./DropdownRender";
import Location from "./Location";
import scottyProfile from "../img/scottyProfile.jpg";
import daisyProfile from "../img/daisyProfile.jpg";
import sammyProfile from "../img/sammyProfile.JPG";
import rosieProfile from "../img/rosieProfile.jpg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../src/style.css";

// import "leaflet/dist/leaflet.css";

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
      "My name is Scotty and I am three years old. I like to play with tennis balls, play tug, and wrestle with my friends. I have hip dysplasia, so sometimes it is uncomfortable when I run.",
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
    breed: "American Foxhound/Dauschund",
    aboutMe:
      "My name is Daisy and I am two years old. I was rescued by my human parents from Alabama, along with my sister Rosie. I like to eat anything and everything. I  beg for food when I am not supposed to. I am faster than my brother Scotty, but I always let him catch me when we are playing tag in the backyard.",
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
    breed: "American Foxhound/Dauschund",
    aboutMe:
      "My name is Rosie and I am two years old. I was rescued by my human mommy and daddy from Alabama, along with my sister, Daisy. I love to destroy toys even though my mommy doesn't like that. I like to play with sister Daisy and my best friend Scotty. We usually get together once a week for a long walk on the street and some chasing and wrestling outside!",
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
      "My name is Sammy and I don't even know how old I am. I was rescued by my human mommies from a shelter. I love to eat. I howl when I want to have food. I get sad when my parents leave me, and get overcome with emotion when they come home. I don't like to play too much, but when I do I get a burst of energy for 10 seconds",
    profilePic: sammyProfile,
    age: 7,
  },
];

const App = () => {
  const [selected, setSelected] = useState(dogs[0]);

  return (
    <div>
      <Header />
      <div>
        <Sidebar sideBarItems={sideBarItems} />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Dropdown
            dogs={dogs}
            selected={selected}
            onSelectedChange={setSelected}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <DropdownRender selectedDog={selected} dogs={dogs} />
        </div>
        <Location selectedDog={selected} />
      </div>
    </div>
  );
};
export default App;
