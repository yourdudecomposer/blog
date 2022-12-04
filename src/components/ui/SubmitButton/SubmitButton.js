import PropTypes from "prop-types";
import React from "react";

import classes from "./SubmitButton.module.scss";

function SubmitButton({ label }) {
  return (
    <button className={classes.button} type="submit">
      {label}
    </button>
  );
}

SubmitButton.propTypes = {
  label: PropTypes.string,
};

SubmitButton.defaultProps = {
  label: "",
};

export default SubmitButton;
