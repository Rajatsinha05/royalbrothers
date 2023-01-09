import "react-slideshow-image/dist/styles.css";

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    head: "We're socially Celebrated",
    head1: "",
    para: "Our customer centric approach has got us amazing reviews. Be it any platform, you will see many users recommending our service.",
    url: "https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-two-2d63ed83b9f2b4003344ac868bb2a42d29efe841bb2c5894ac53bd6af85adb86.jpg",
    caption: "Slide 1",
  },
  {
    head: "Ready to serve in 40+ cities!",
    head1: "",
    para: "Think of a city &amp; we are mostly there. The next time you plan on exploring a city, know that your means of transport is sorted with Royal Brothers.",
    url: "https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-three-a8787ad27e9ea8ab39d164f233b0995c76d59c4a517c0313e11a4122d6309038.jpg",
    caption: "Slide 2",
  },
  {
    head: `Bikes maintained so good,`,
    head1: "you will feel it is brand new",
    para: "We obsess on giving you the best possible experience. This is not only with well serviced bikes but also with a 24/7 support team available just a call away.",
    url: "https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-one-8c7f76cbbc58a89e95e8fcc1ab03d3d4cf12ef680989755fcf01f3a725d5d775.jpg",
    caption: "Slide 3",
  },
];

const Quality = () => {
  return (
    <>
      <div>
        <div
          style={{
            position: "absolute",
            zIndex: "20",
            textAlign: "center",
            left: "0",
            right: "0",
          }}
        >
          <h1 style={{ fontSize: "30px", textAlign: "center" }}>
            WE BELIEVE IN QUALITY
          </h1>
          <div
            style={{
              width: "50px",
              background: "#fed24d",
              margin: "auto",
              height: "5px",
            }}
          ></div>
        </div>
      </div>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div
              className="each-slide"
              key={index}
              style={{
                position: "relative",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                  width: "100%",
                  height: "100vh",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "auto",
                }}
              >
                <div id="textDivQualityParent"
                  style={{
                    backgroundSize: "100% 100%",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div id="textDivQuality"
                    style={{
                      width: "30%",
                      padding: "10px",
                      marginLeft: "30px",
                    }}
                  >
                    <h3 >{slideImage.head}</h3>
                    <h3 >{slideImage.head1}</h3>
                    <p style={{ color: "grey" }}>{slideImage.para}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

export default Quality;
