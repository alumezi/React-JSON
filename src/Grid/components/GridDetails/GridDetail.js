import React from "react";
import SideInfo from "./subComponents/sideInfo";
import MenuItem from "./subComponents/menuItem";
import "./GridDetail.css";
import closeButton from "../../../assets/close-button.png";

const GridDetail = props => {
  const { data, keys, closeOverlay, toggleOverlay, id, display } = props;
  const { value } = data[id].Content;

  return (
    <div id="overlay" style={{ display }}>
      <div className="menu">
        {keys.map(item => (
          <MenuItem
            toggleOverlay={toggleOverlay}
            headline={data[item].Content.value.headline}
            key={item}
            id={item}
          />
        ))}
        <img
          onClick={closeOverlay}
          src={closeButton}
          className="closeButton"
          alt=""
        />
      </div>

      <div className="content">
        <div>
          <h1>{value.headline}</h1>
          <p>{value.subheadline}</p>
        </div>
        <div className="photo-info">
          <img src={value.image} alt="" />
          <div className="side-info">
            {value.list.map((item, index) => (
              <SideInfo text={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridDetail;
