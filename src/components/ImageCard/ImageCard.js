import React from "react";

const ImageCard = ({ imageUrl }) => {
  const imageRef = React.useRef();
  const [spans, setSpans] = React.useState(0);

  // like componentDidMount call after first render
  React.useEffect(() => {
    imageRef.current.addEventListener("load", setHeight);
  }, []); // empty bracket mean only run one time.

  // calculating height of each image
  const setHeight = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 200);
    setSpans(spans);
  };

  return (
    // set span space of each image according to spans.
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} src={imageUrl} />
    </div>
  );
};

export default ImageCard;
