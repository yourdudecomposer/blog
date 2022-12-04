import PropTypes from "prop-types";
import { Checkbox as Ch } from "antd";
import React from "react";

function Checkbox({ label, className, onChange }) {
  return (
    <Ch onChange={onChange} className={className}>
      {label}
    </Ch>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};
Checkbox.defaultProps = {
  className: "",
  label: "",
  onChange: () => {},
};
export default Checkbox;
