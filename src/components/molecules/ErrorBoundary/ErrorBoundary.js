import React from "react";
import PropTypes from "prop-types";

import "./ErrorBoundary.scss";
import { Button } from "../../atoms";

const ErrorBoundary = ({ retryFunc }) => {
  return (
    <div className={"error-boundary"}>
      <p>Something went wrong</p>
      <Button
        type={"button"}
        title={"Try again"}
        kindOf={"main"}
        handleOnClick={retryFunc}
      />
    </div>
  );
};

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  retryFunc: PropTypes.func,
};
