// libs
import React from "react";
import Lightbox from "react-image-lightbox";
import StackGrid from "react-stack-grid";

// components
import Sidebar from "./components/Sidebar/Sidebar";
import Grid from "./components/Grid/Grid";

// style
import "./App.css";
import "react-image-lightbox/style.css";
import DATA from "./data/data";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState("");

  const handleClick = (url) => {
    setImageUrl(url);
    setIsOpen(true);
  };

  return (
    <div>
      {isOpen && (
        <Lightbox mainSrc={imageUrl} onCloseRequest={() => setIsOpen(false)} />
      )}
      <div className="col-md-3 side__bar p-0 position-fixed">
        {/* sidebar component */}
        <Sidebar />
      </div>
      <div className="col-md-9 offset-md-3">
        {/* gallery */}
        {/* <Grid onClick={handleClick} /> */}
        <StackGrid columnWidth={320} monitorImagesLoaded={true}>
          {DATA.map((item, i) => (
            // <ImageCard key={i} imageUrl={item} onClick={handleClick} />
            <div key={i + 1}>
              <img src={item} onClick={handleClick} />
            </div>
          ))}
        </StackGrid>
      </div>
    </div>
  );
}

export default App;
