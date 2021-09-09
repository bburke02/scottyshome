import React from "react";

const DropdownRender = ({ selectedDog }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={selectedDog.profilePic} />
      </div>
      <div className="content">
        <a className="header">{selectedDog.name}</a>
        <div className="meta">
          <span className="date">Age: {selectedDog.age}</span>
        </div>
        <div className="description">{selectedDog.aboutMe}</div>
      </div>
      <div className="extra content"></div>
    </div>
  );
};

export default DropdownRender;
