import React from "react";
import { useLocation } from "react-router-dom";

import classes from "./NoMatch.module.scss";

export default function NoMatch() {
  const location = useLocation();
  return (
    <div className={classes["no-match"]}>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
