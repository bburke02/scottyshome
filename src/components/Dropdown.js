import React, { useState, useEffect, useRef } from "react";

export const Dropdown = ({ dogs, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedDogList = dogs.map((dog) => {
    if (dog.key === selected.key) {
      return null;
    }

    return (
      <div
        key={dog.key}
        className="item"
        onClick={() => {
          onSelectedChange(dog);
        }}
      >
        {dog.name}
      </div>
    );
  });

  return (
    <div
      ref={ref}
      className="ui form"
      style={{ fontFamily: '"Montserrat", sansSerif', textAlign: "center" }}
    >
      <div className="field">
        <label className="label" style={{ color: "#1366B2" }}>
          Select a Dog
        </label>
        <div
          style={{
            backgroundColor: "##d4d4d5",
            width: "10vw",
            textAlign: "center",
          }}
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div style={{ color: "rgb(14, 65, 119)" }} className="text">
            {selected.name}
          </div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedDogList}
          </div>
        </div>
      </div>
    </div>
  );
};
