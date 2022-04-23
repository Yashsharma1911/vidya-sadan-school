import React from 'react';
import { Container, Frame } from "./styles/card";

export default function Card({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Card.Frame = function CardFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

