import React from 'react';
import { Container, Text, Heading, SectionLogo,Frame, SectionHeading, SectionText,Div } from "./styles/card";


export default function Card({ children, ...restProps }) {
  return<Container {...restProps}>{children}</Container>;
}

Card.Frame = function CardFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
    };

Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Card.Heading = function CardHeading({ children, ...restProps }) {
    return <Heading {...restProps}>{children}</Heading>;
};

Card.SectionLogo = function SectionLogo({ children, ...restProps }) {
    return <SectionLogo {...restProps}>{children}</SectionLogo>;
};

Card.SectionHeading = function SectionHeading({ children, ...restProps }) {
    return <SectionHeading {...restProps}>{children}</SectionHeading>;
};

Card.SectionText = function SectionText({ children, ...restProps }) {
    return <SectionText {...restProps}>{children}</SectionText>;
};

Card.Div = function CardDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>
}