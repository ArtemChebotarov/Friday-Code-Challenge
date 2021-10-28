import React from "react";
import PropTypes from "prop-types";

import "./Flexbox.scss";

const Flexbox = ({ children, additionalStyle }) => {
  return (
    <div className={"flexbox"} style={additionalStyle}>
      {children}
    </div>
  );
};

export default Flexbox;

Flexbox.propTypes = {
  children: PropTypes.any,
  additionalStyle: PropTypes.object,
};
