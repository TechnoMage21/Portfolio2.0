import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

if (process.env.NODE_ENV === 'production') {
    // Disable React Developer Tools in production
    if (typeof window !== 'undefined' && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = () => {};
    }
  }
  

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
