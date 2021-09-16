import React from "react";

const DropdownRender = ({ selectedDog }) => {
  return (
    <div
      style={{
        boxShadow: "10px 5px 30px black",
        color: "#1366B2",
        fontFamily: '"Montserrat", sansSerif',
      }}
      className="ui card"
    >
      <div className="image">
        <img src={selectedDog.profilePic} />
      </div>
      <div
        className="content "
        style={{ color: "#1366B2", fontFamily: '"Montserrat", sansSerif' }}
      >
        <a
          className="header"
          style={{ color: "#1366B2", fontFamily: '"Montserrat", sansSerif' }}
        >
          {selectedDog.name}
        </a>
        <div className="meta" style={{ fontFamily: '"Montserrat", sansSerif' }}>
          <span
            className="date"
            style={{
              color: "#1366B2",

              fontFamily: '"Montserrat", sansSerif',
              fontWeight: "700",
            }}
          >
            Age: {selectedDog.age}
          </span>
        </div>
        <div
          className="extra content"
          style={{
            color: "#1366B2",
            fontFamily: '"Montserrat", sansSerif',
            fontWeight: "700",
          }}
        >
          Breed: {selectedDog.breed}
        </div>
        <div
          className="description"
          style={{
            color: "#1366B2",
            fontFamily: '"Montserrat", sansSerif',
            borderTop: "2px",
          }}
        >
          {selectedDog.aboutMe}
        </div>
      </div>
    </div>
  );
};

export default DropdownRender;
