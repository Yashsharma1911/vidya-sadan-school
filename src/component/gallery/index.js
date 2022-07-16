import React from "react";
import {
  Container,
  Div,
  Heading,
  Text,
  SubText,
  Frame,
  FrameOne,
  FrameTwo,
  FrameThree,
  FrameFour,
  FrameFive,
  FrameSix,
  Image,
} from "./styles/gallery";

export default function Gallery({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Gallery.Div = function GalleryDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>;
};

Gallery.Heading = function GalleryHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Gallery.Text = function GalleryText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Gallery.SubText = function GallerySubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};

Gallery.Frame = function GalleryFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

// Gallery.Item = function GalleryItem({ children, ...restProps }) {
//   return <Item {...restProps}>{children}</Item>;
// };

Gallery.Image = function GalleryImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Gallery.FrameOne = function GalleryFrameOne({ children, ...restProps }) {
  return <FrameOne {...restProps}>{children}</FrameOne>;
};

Gallery.FrameTwo = function GalleryFrameTwo({ children, ...restProps }) {
  return <FrameTwo {...restProps}>{children}</FrameTwo>;
};

Gallery.FrameThree = function GalleryFrameThree({ children, ...restProps }) {
  return <FrameThree {...restProps}>{children}</FrameThree>;
};

Gallery.FrameFour = function GalleryFrameFour({ children, ...restProps }) {
  return <FrameFour {...restProps}>{children}</FrameFour>;
};

Gallery.FrameFive = function GalleryFrameFive({ children, ...restProps }) {
  return <FrameFive {...restProps}>{children}</FrameFive>;
};

Gallery.FrameSix = function GalleryFrameSix({ children, ...restProps }) {
  return <FrameSix {...restProps}>{children}</FrameSix>;
};
