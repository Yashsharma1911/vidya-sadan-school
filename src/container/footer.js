import React from "react";
import Footer from "../component/footer";

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
                  Mahuar Colony, Shivpuri Road, Karera, India
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
              <Footer.PageLink to="#">Other Pages</Footer.PageLink>
              <Footer.PageLink to="#">About Us</Footer.PageLink>
              <Footer.PageLink to="#">Contact Us</Footer.PageLink>
              <Footer.PageLink to="#">Registration</Footer.PageLink>
              <Footer.PageLink to="#">Result</Footer.PageLink>
              <Footer.PageLink to="#">Courses</Footer.PageLink>
            </Footer.Column>
            <Footer.Column>
              <Footer.PageLink to="#">Privacy & Policy</Footer.PageLink>
              <Footer.PageLink to="#">Security</Footer.PageLink>
              <Footer.PageLink to="#">Retention of Data</Footer.PageLink>
              <Footer.PageLink to="#">Sharing Information</Footer.PageLink>
            </Footer.Column>
            <Footer.Column>
              <Footer.PageLink to="#">Follow Us</Footer.PageLink>
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
