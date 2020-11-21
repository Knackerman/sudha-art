// libs
import React from "react";
import Lightbox from "react-image-lightbox";
import { IoIosCloseCircle, IoIosMenu } from "react-icons/io";

// components
import Sidebar from "./components/Sidebar/Sidebar";
import Gallery from "./components/Gallery/Gallery";

// style
import "./App.css";
import "react-image-lightbox/style.css";

// data
import { Data } from "./data/data";
import { CategoryData } from "./data/data";

// render method
function App() {
  //state values
  const [isOpen, setIsOpen] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState("");
  const [category, setCategory] = React.useState("");

  // handle image click
  const imageClick = (e) => {
    setImageUrl(e.target.src);
    setIsOpen(true);
  };

  // handle category click
  const itemClick = (e) => {
    setCategory(e.target.innerHTML.toLowerCase());
  };

  // handle navbar toggle (mobile responsive)
  const navbarToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div>
      {/*  condition to show lightbox */}
      {isOpen && (
        <Lightbox mainSrc={imageUrl} onCloseRequest={() => setIsOpen(false)} />
      )}
      <div
        className={`
          ${navOpen ? "sibebar__main" : "sidebar__main__close"} 
              col-md-3 side__bar p-0 position-fixed`}
      >
        {/*  condition to show sidebar close button (responsive) */}
        {/* sidebar component */}
        {navOpen && (
          <IoIosCloseCircle
            className="navbar__close__btn"
            onClick={navbarToggle}
          />
        )}
        {/* sidebar section*/}
        <Sidebar onClick={itemClick} />
      </div>
      {/* gallery section */}
      <div className="col-md-9 offset-md-3 py-3">
        {/*  condition to show sidebar open button (responsive) */}
        {!navOpen && (
          <span className="navbar__open__btn">
            <IoIosMenu onClick={navbarToggle} />
          </span>
        )}
        {/* grid */}
        <Gallery
          category={category}
          data={Data}
          imageClick={imageClick}
          categoryData={CategoryData}
        />
      </div>
    </div>
  );
}

export default App;
