import React from "react";
import Footer from "../component/footer";
import * as ROUTES from '../constants/routes'

export default function FooterContainer({ children, ...restProps }) {
  return (
    <>
      <Footer>
        <Footer.RowWrap>
          <Footer.Row>
            <Footer.Column>
              <Footer.Logo to="/" src="images/pictures/logo-main.svg" />
              <Footer.Div>
                <Footer.PageLink to="#">
                  Behind Police Line Karera Distt. Madhya Pradesh
                </Footer.PageLink>
                <Footer.Div>
                  <Footer.ImgIcon src="images/icons/phone-icon.svg" />
                  <Footer.PageLink to="#" mailto="tel:7000032230">
                    (+91)7000032230
                  </Footer.PageLink>
                </Footer.Div>
                <Footer.Div>
                  <Footer.ImgIcon src="images/icons/email-icon.svg" />
                  <Footer.PageLink
                    to="#"
                    mailto="mailto:vidyasadanschool@gmail.com"
                  >
                    vidyasadanschool@gmail.com
                  </Footer.PageLink>
                </Footer.Div>
              </Footer.Div>
            </Footer.Column>
            <Footer.Column>
              <Footer.PageLinkTo to="#">Other Pages</Footer.PageLinkTo>
              <Footer.PageLinkTo to={ROUTES.ABOUT}>About Us</Footer.PageLinkTo>
              <Footer.PageLinkTo to={ROUTES.CONTACT}>Contact Us</Footer.PageLinkTo>
              {/* <Footer.PageLinkTo to="#">Registration</Footer.PageLinkTo>
              <Footer.PageLinkTo to="#">Result</Footer.PageLinkTo>
              <Footer.PageLinkTo to="#">Courses</Footer.PageLinkTo> */}
            </Footer.Column>
            <Footer.Column>
              <Footer.PageLinkTo to="#">Privacy & Policy</Footer.PageLinkTo>
              <Footer.PageLinkTo to="#">Security</Footer.PageLinkTo>
              <Footer.PageLinkTo to="#">Retention of Data</Footer.PageLinkTo>
              <Footer.PageLinkTo to="#">Sharing Information</Footer.PageLinkTo>
            </Footer.Column>
            <Footer.Column>
              <Footer.PageLinkTo to="#">Follow Us</Footer.PageLinkTo>
              <Footer.Div>
                <Footer.ImgSocialIcon
                  to="#"
                  src="images/icons/facebook-icon.svg"
                />
                <Footer.ImgSocialIcon
                  to="#"
                  src="images/icons/twitter-icon.svg"
                />
                <Footer.ImgSocialIcon
                  to="#"
                  src="images/icons/linkedin-icon.svg"
                />
                <Footer.ImgSocialIcon
                  to="#"
                  src="images/icons/instagram-icon.svg"
                />
              </Footer.Div>
            </Footer.Column>
          </Footer.Row>
        </Footer.RowWrap>
        <Footer.CopyRightDiv>
          <Footer.Text>
            Copyright 2022 © Vidya Sadan School, Figmaland, Icons8, and other
            contributors. All rights reserved
          </Footer.Text>
        </Footer.CopyRightDiv>
      </Footer>
    </>
  );
}
