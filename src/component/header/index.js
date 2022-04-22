import React from "react";
import { Container, Frame, ButtonLink, Login, JoinUs, Logo, Div } from "./styles/header";

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
    return <Logo {...restProps}>{children}</Logo>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Login = function HeaderLogin({ children, ...restProps }) {
    return <Login {...restProps}>{children}</Login>;
};

Header.JoinUs = function HeaderJoinUs({ children, ...restProps }) {
    return <JoinUs {...restProps}>{children}</JoinUs>;
};

Header.Div = function HeaderDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>
}

