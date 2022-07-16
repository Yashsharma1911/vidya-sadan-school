import React from "react";
import Gallery from "../component/gallery";
import photosData from "../fixtures/photos";

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
            <Gallery.FrameOne>
                <Gallery.Image src={photosData[0].src} alt={photosData[0].alt} />
            </Gallery.FrameOne>
            <Gallery.FrameTwo>
                <Gallery.Image src={photosData[1].src} alt={photosData[1].alt} />
            </Gallery.FrameTwo>
            <Gallery.FrameThree>
                <Gallery.Image src={photosData[2].src} alt={photosData[2].alt} />
            </Gallery.FrameThree>
            <Gallery.FrameFour>
                <Gallery.Image src={photosData[3].src} alt={photosData[3].alt} />
            </Gallery.FrameFour>
            <Gallery.FrameFive>
                <Gallery.Image src={photosData[4].src} alt={photosData[4].alt} />
            </Gallery.FrameFive>
            <Gallery.FrameSix>
                <Gallery.Image src={photosData[5].src} alt={photosData[5].alt} />
            </Gallery.FrameSix>

        </Gallery.Frame>
      </Gallery>
    </>
  );
}
