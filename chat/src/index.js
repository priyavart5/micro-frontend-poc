import React from "react";
import ReactDOM from "react-dom/client";  // import from 'react-dom/client'
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// render micro frontend function
window.renderchat = (containerId, history) => {
  const root = ReactDOM.createRoot(document.getElementById(containerId));
  root.render(<App history={history} />);
  serviceWorker.unregister();
};

// unmount micro frontend function
window.unmountchat = containerId => {
  const root = ReactDOM.createRoot(document.getElementById(containerId));
  root.unmount();
};

// Mount to root if it is not a micro frontend
if (!document.getElementById("chat-container")) {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
