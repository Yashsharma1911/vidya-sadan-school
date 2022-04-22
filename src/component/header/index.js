import React from "react";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Frame = function HeaderFrame({ children, ...restprops }) {
  return <Frame {...restprops}>{children}</Frame>;
};

Header.Logo = function HeaderLogo({ children, ...restprops }) {
  return <Logo {...restprops}>{children}</Logo>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restprops }) {
  return <ButtonLink {...restprops}>{children}</ButtonLink>;
};

Header.Login = function HeaderLogin({ children, ...restprops }) {
  return <Login {...restprops}>{children}</Login>;
};

Header.JoinUs = function HeaderJoinUs({ children, ...restprops }) {
  return <JoinUs {...restprops}>{children}</JoinUs>;
};
