import React from "react";
import "./App.scss";
import Main from "./containers/Main";

if (process.env.NODE_ENV === 'production') {
  // Disable React Developer Tools in production
  if (typeof window !== 'undefined' && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = () => {};
  }
}


function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
