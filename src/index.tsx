import * as React from "react";
import * as ReactDOM from "react-dom";

declare var __webpack_public_path__: any;

(async () => {
  const url = new URL((document.currentScript as any).src);
  const widgetLink = url.href.substring(0, url.href.lastIndexOf("/") + 1);
  __webpack_public_path__ = widgetLink;

  if (document.getElementById("webchat-root")) {
    const root = document.getElementById("webchat-root");
    const username = root?.getAttribute("data-username");

    const { default: WebChat } = await import("./components/webchat");

    ReactDOM.render(<WebChat username={username} />, root);
  }

  if (document.getElementById("brol-root")) {
    const root = document.getElementById("brol-root");

    const { default: Brol } = await import("./components/brol");

    ReactDOM.render(<Brol />, root);
  }
})();
