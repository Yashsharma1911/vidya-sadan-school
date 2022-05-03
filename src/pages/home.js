
import React from 'react';
import CardContainer from '../container/card';
import JumbotronContainer from '../container/jumbotron';
import HeaderContainer from "../container/header";
import Feature from "../component/feature";
import FooterContainer from "../container/footer";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Frame>
            <Feature.Left>
              <Feature.Wrap>
                <Feature.TagText>Join Us</Feature.TagText>
                <Feature.HeadLine>Best Learning Opportunities</Feature.HeadLine>
                <Feature.Text>
                  Every day brings with it a fresh set of learning
                  possibilities.
                </Feature.Text>
                <Feature.Div>
                  <Feature.ButtonLink to="#">
                    <Feature.Button show={true} fontColor="#ffffff">
                      Join Us
                    </Feature.Button>
                  </Feature.ButtonLink>
                  <Feature.ButtonLink to="#">
                    <Feature.Button fontColor="#96BB7C">
                      Learn More
                    </Feature.Button>
                  </Feature.ButtonLink>
                </Feature.Div>
              </Feature.Wrap>
            </Feature.Left>

            <Feature.Right>
              <Feature.Img src="images/pictures/header-main-image.jpg" />
            </Feature.Right>
          </Feature.Frame>
        </Feature>
      </HeaderContainer>
      <CardContainer />
      <JumbotronContainer />
      <FooterContainer />
    </>
  );
}
