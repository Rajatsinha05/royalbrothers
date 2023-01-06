import "react-slideshow-image/dist/styles.css";

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-two-2d63ed83b9f2b4003344ac868bb2a42d29efe841bb2c5894ac53bd6af85adb86.jpg",
    caption: "Slide 1",
  },
  {
    url: "https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-three-a8787ad27e9ea8ab39d164f233b0995c76d59c4a517c0313e11a4122d6309038.jpg",
    caption: "Slide 2",
  },
  {
    url: "https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-one-8c7f76cbbc58a89e95e8fcc1ab03d3d4cf12ef680989755fcf01f3a725d5d775.jpg",
    caption: "Slide 3",
  },
];

const Quality = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                width: "100%",
                height: "100vh",
                backgroundPosition: "center center",
                backgroundSize: "100% 100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Quality;
