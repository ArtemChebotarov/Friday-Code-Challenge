import React from "react";
import PropTypes from "prop-types";

import infoIcon from "../../../assets/vector/info.svg";

import "./InfoBanner.scss";

const InfoBanner = ({ content, additionalStyle }) => {
  return (
    <div className={"info"} style={additionalStyle}>
      <img src={infoIcon} alt={"info"} width={29} height={29} />
      <div className={"info--banner"}>{content}</div>
    </div>
  );
};

export default InfoBanner;

InfoBanner.propTypes = {
  content: PropTypes.element,
  additionalStyle: PropTypes.object,
};
