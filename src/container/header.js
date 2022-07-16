import React, { useState, useEffect } from "react";
import Header from "../component/header";
import * as ROUTES from '../constants/routes'

export default function HeaderContainer({ children, ...restProps }) {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [header, setHeader] = useState(true);
  let lastScroll = 0;
  const listenScrollEvent = (event) => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      setHeader(true);
    }
    if (lastScroll < currentScroll) {
      setHeader(false);
    } else if (lastScroll > currentScroll) {
      setHeader(true);
    }
    lastScroll = currentScroll;
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header background={header}>
        <Header.HeroShapeDiv
          height="176.96px"
          width="111.61px"
          top="0"
          left="0"
          borderRadius="0px 0px 55.805px 0px"
        />
        <Header.HeroShapeDiv
          height="207px"
          width="179px"
          top="0"
          right="0"
          borderRadius="0px 0px 0px 62px"
        />

        <Header.Frame>
          <Header.Div>
            <Header.Logo to={ROUTES.HOME}>Vidya Sadan</Header.Logo>
          </Header.Div>
          <Header.Div>
            <Header.ButtonLink to={ROUTES.HOME}>Home</Header.ButtonLink>
            <Header.ButtonLink to={ROUTES.GALLERY}>Gallery</Header.ButtonLink>
            <Header.ButtonLink to={ROUTES.ABOUT}>About</Header.ButtonLink>
            <Header.ButtonLink to={ROUTES.CONTACT}>Contact</Header.ButtonLink>
          </Header.Div>
          <Header.Div>
            <Header.Login to="#">Login</Header.Login>
            <Header.ButtonLink to="#">
              <Header.JoinUs>JOIN US</Header.JoinUs>
            </Header.ButtonLink>
          </Header.Div>
          <Header.BurgerMenuImg
            src="images/icons/menu-icon.svg"
            alt="menu-logo"
            onClick={() => setBurgerStatus(true)}
          />

          {/* <Header.Overlay show={burgerStatus} /> */}
        </Header.Frame>
      </Header>
      <Header.BurgerMenu show={burgerStatus}>
        <Header.MenuDiv>
          <Header.CrossButton
            src="images/icons/cross-icon.svg"
            onClick={() => setBurgerStatus(false)}
          />

          <Header.BurgerMenuItem>
            <Header.ButtonLink to={ROUTES.HOME}>Home</Header.ButtonLink>
          </Header.BurgerMenuItem>

          <Header.BurgerMenuItem>
            <Header.ButtonLink to={ROUTES.GALLERY}>Gallery</Header.ButtonLink>
          </Header.BurgerMenuItem>

          <Header.BurgerMenuItem>
            <Header.ButtonLink to={ROUTES.ABOUT}>About</Header.ButtonLink>
          </Header.BurgerMenuItem>

          <Header.BurgerMenuItem>
            <Header.ButtonLink to={ROUTES.CONTACT}>Contact</Header.ButtonLink>
          </Header.BurgerMenuItem>

          <Header.BurgerMenuItem>
            <Header.Login to="#">Login</Header.Login>
          </Header.BurgerMenuItem>

          <Header.BurgerMenuItem>
            <Header.ButtonLink to="#">
              <Header.JoinUs>JOIN US</Header.JoinUs>
            </Header.ButtonLink>
          </Header.BurgerMenuItem>
        </Header.MenuDiv>
      </Header.BurgerMenu>
      <Header.Overlay show={burgerStatus} />
      {children}
    </>
  );
}
