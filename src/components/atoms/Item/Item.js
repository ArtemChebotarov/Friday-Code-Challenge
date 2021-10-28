import React, { useState } from "react";
import PropTypes from "prop-types";

import filledDotIcon from "../../../assets/vector/orange-filled-dot.svg";
import emptyDotIcon from "../../../assets/vector/orange-empty-dot.svg";

import "./Item.scss";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

const Item = ({ selected, content, setSelected, id, additionalStyle }) => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  return (
    <div
      className={"item"}
      onClick={() => setSelected(id)}
      style={additionalStyle}
      onMouseEnter={() => {
        setStatus(STATUS.HOVERED);
      }}
      onMouseLeave={() => {
        setStatus(STATUS.NORMAL);
      }}
    >
      <div className={"item--indicator"}>
        <img src={selected ? filledDotIcon : emptyDotIcon} alt={"indicator"} />
      </div>
      <p className={status}>{content}</p>
    </div>
  );
};

export default Item;

Item.propTypes = {
  selected: PropTypes.bool.isRequired,
  content: PropTypes.element,
  id: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
  additionalStyle: PropTypes.object,
};
