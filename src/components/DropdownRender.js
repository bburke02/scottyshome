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
              color: "#1366B2",
              fontFamily: '"Montserrat", sansSerif',
            }}
          >
            Age: {selectedDog.age}
          </span>
        </div>
        <div
          className="description"
          style={{ color: "#1366B2", fontFamily: '"Montserrat", sansSerif' }}
        >
          {selectedDog.aboutMe}
        </div>
      </div>
      <div
        className="extra content"
        style={{ fontFamily: '"Montserrat", sansSerif' }}
      ></div>
    </div>
  );
};

export default DropdownRender;
