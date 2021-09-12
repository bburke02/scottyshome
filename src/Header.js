import React from "react";

const Header = () => {
  console.log("header");
  return (
    <div
      className="ui secondary pointing menu"
      style={{ backgroundColor: "rgba(0,0,0,.87)" }}
    >
      <h1 className="ui header" style={{ color: "white", margin: "0" }}>
        Scotty's Home
      </h1>
    </div>
  );
};

export default Header;
