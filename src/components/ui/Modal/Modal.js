import PropTypes from "prop-types";
import React from "react";

import icon from "../../../assets/img/icon.svg";

import classes from "./Modal.module.scss";

function Modal({ style, closeModal, sendDeleteRequest }) {
  return (
    <div style={style} className={classes.container}>
      <img src={icon} alt="" />
      <p>Are you sure to delete this article?</p>

      <div className={classes["button-container"]}>
        <button type="button" onClick={closeModal} className={classes.no}>
          No
        </button>
        <button
          type="button"
          onClick={sendDeleteRequest}
          className={classes.yes}
        >
          Yes
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  sendDeleteRequest: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.any),
};
Modal.defaultProps = {
  closeModal: () => {},
  sendDeleteRequest: () => {},
  style: {},
};

export default Modal;
