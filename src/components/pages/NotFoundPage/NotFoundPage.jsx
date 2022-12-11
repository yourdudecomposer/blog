import React from 'react';

import classes from "./NotFoundPage.module.scss";

export default function ErrorPage() {
  return (
    <div id="error-page">
      <main className={classes.error}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>iiiiiii</i>
        </p>
      </main>
    </div>
  );
}
