// libs
import React from "react";
import StackGrid from "react-stack-grid";

// render method
const Gallery = ({ category, data, imageClick, categoryData }) => {
  return (
    <StackGrid columnWidth={320} monitorImagesLoaded={true}>
      {category === ""
        ? data.map((item, i) => {
            return (
              <div key={i}>
                <img src={item} alt="gallery" onClick={imageClick} />
              </div>
            );
          })
        : categoryData.map((item, i) => {
            if (item.category === category.toLowerCase()) {
              return item.images.map((image, j) => (
                <div key={j}>
                  <img src={image} alt="gallery" onClick={imageClick} />
                </div>
              ));
            }
          })}
    </StackGrid>
  );
};

export default Gallery;
