import React from "react";
import Gallery from "../component/gallery";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function GalleryContainer() {
  return (
    <>
      <Gallery>
        <Gallery.Div>
          <Gallery.Heading>Our memories</Gallery.Heading>
          <Gallery.Text>Gallery</Gallery.Text>
          <Gallery.SubText>
            The more that you read, the more things you will know, the more that
            you learn, the more places you'll go: Dr. Seuss
          </Gallery.SubText>
        </Gallery.Div>

        <Gallery.Frame>
          <Carousel autoPlay interval="5000" transitionTime="5000" infiniteLoop>
            <div>
              <img src="images/pictures/vidya-1.jpeg" alt="" />
              <p className="legend">Photo 1</p>
            </div>
            <div>
              <img src="images/pictures/vidya-2.jpeg" alt="" />
              <p className="legend">Photo 2</p>
            </div>
            <div>
              <img src="images/pictures/vidya-4.jpeg" alt="" />
              <p className="legend">Photo 3</p>
            </div>
            <div>
              <img src="images/pictures/vidya-5.jpeg" alt="" />
              <p className="legend">Photo 4</p>
            </div>
            <div>
              <img src="images/pictures/vidya-6.jpeg" alt="" />
              <p className="legend">Photo 5</p>
            </div>
          </Carousel>
        </Gallery.Frame>
      </Gallery>
    </>
  );
}
