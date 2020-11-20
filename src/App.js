// libs
import React from "react";

// components
import Sidebar from "./components/Sidebar/Sidebar";
import Grid from "./components/Grid/Grid";

// style
import "./App.css";

function App() {
  return (
    <div>
      <div className="col-md-3 side__bar p-0 fixed-top">
        {/* sidebar component */}
        <Sidebar />
      </div>
      <div className="col-md-9 offset-md-3">
        {/* gallery */}
        <Grid />
      </div>
    </div>
  );
}

export default App;
