import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({ title, handleOnClick, type, kindOf }) => {
  return (
    <button onClick={handleOnClick} type={type} className={`button__${kindOf}`}>
      {title}
    </button>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string,
  handleOnClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  kindOf: PropTypes.string.isRequired,
};
