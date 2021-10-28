import React from "react";
import PropTypes from "prop-types";

import filledDotIcon from "../../../assets/vector/orange-filled-dot.svg";
import emptyDotIcon from "../../../assets/vector/orange-empty-dot.svg";

import "./Item.scss";

const Item = ({ selected, content, setSelected, id, additionalStyle }) => {
  return (
    <div
      className={"item"}
      onClick={() => setSelected(id)}
      style={additionalStyle}
    >
      <div className={"item--indicator"}>
        <img src={selected ? filledDotIcon : emptyDotIcon} alt={"indicator"} />
      </div>
      {content}
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
