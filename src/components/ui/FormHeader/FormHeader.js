import PropTypes from "prop-types";
import React from "react";

import classes from "./FormHeader.module.scss";

function FormHeader({ title }) {
  return <h2 className={classes.title}>{title}</h2>;
}

FormHeader.propTypes = {
  title: PropTypes.string,
};
FormHeader.defaultProps = {
  title: "",
};

export default FormHeader;
