/**
 * This is the entry file of the Direflow setup.
 *
 * You can add any additional functionality here.
 * For example, this is a good place to hook into your
 * Web Component once it's mounted on the DOM.
 *
 * !This file cannot be removed.
 * It can be left blank if not needed.
 */

import ReactApp from "./direflow-components/react-app";
import Button from "./direflow-components/react-button";

ReactApp.then((element) => {
  /**
   * Access DOM node when it's mounted
   */
  console.log("react-app is mounted on the DOM", element);
});

Button.then((element) => {
  /**
   * Access DOM node when it's mounted
   */
  console.log("react-button is mounted on the DOM", element);
});
