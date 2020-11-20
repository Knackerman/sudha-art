// libs
import React from "react";
import StackGrid from "react-stack-grid";

// style
import "./Grid.css";

// component
import ImageCard from "../ImageCard/ImageCard";

// Images
import DATA from "../../data/data";

const Grid = () => {
  return (
    <>
      <div className="image__list">
        {DATA.map((item) => (
          <ImageCard imageUrl={item} />
        ))}
      </div>
    </>
  );
};

export default Grid;
