import React, { useState } from "react";

const Sidebar = ({ sideBarItems }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleNow, setVisibleNow] = useState(false);

  const onSideBarClick = (index) => {
    setActiveIndex(index);
  };

  const visible = visibleNow ? "visible" : "";

  const renderedItems = sideBarItems.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <a
          className="item"
          onClick={() => {
            onSideBarClick(index);
          }}
        >
          {item.title}
        </a>
      </React.Fragment>
    );
  });

  return (
    <div>
      <div>
        <i
          className="bars icon"
          onClick={() => {
            setVisibleNow(!visibleNow);
          }}
        />
      </div>
      <div>
        <div className={`ui sidebar inverted vertical menu ${visible}`}>
          <div>
            <i
              className="bars icon"
              style={{ color: "white", height: "100%", width: "auto" }}
              onClick={() => {
                setVisibleNow(!visibleNow);
              }}
            />
          </div>
          {renderedItems}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
