import * as React from "react";
import * as ReactDOM from "react-dom";

import WebChat from "./components/webchat";

(async () => {
  if (document.getElementById("webchat-root")) {
    const root = document.getElementById("webchat-root");
    const username = root?.getAttribute("data-username");

    ReactDOM.render(
      <WebChat username={username} />,
      document.getElementById("webchat-root")
    );
  }
})();
