import React from "react";
import Card from "../component/card";

export default function CardContainer() {
  return (
    <Card>
      <Card.Frame>
        <Card.Div>
          <Card.Text>Practice advice</Card.Text>
          <Card.Heading>We Provide</Card.Heading>
          <Card.Text>
            The more that you read, the more things you will know, the more that
            you learn, the more places you'll go: Dr. Seuss
          </Card.Text>
        </Card.Div>
        <Card.Div>
          <Card.SectionLogo></Card.SectionLogo>
          <Card.SectionHeading>Expert Instruction</Card.SectionHeading>
          <Card.SectionText>
            The gradual accumulation and small-scale..
          </Card.SectionText>
        </Card.Div>
      </Card.Frame>
    </Card>
  );
}
