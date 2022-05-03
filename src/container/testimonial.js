import React from "react";
import Testimonial from "../component/testimonial";

export default function TestimonialContainer() {
  return (
    <>
      <Testimonial>
        <Testimonial.Div>
          <Testimonial.Heading>Practice Advice</Testimonial.Heading>
          <Testimonial.SubHeading>Our Top Students</Testimonial.SubHeading>
          <Testimonial.Text>
            You are braver than you believe, stronger than you seem and smarter
            than you think: A.A Milne
          </Testimonial.Text>
        </Testimonial.Div>

        <Testimonial.Div>
          <Testimonial.Frame>
            <Testimonial.Students>
              <Testimonial.Image src="images/pictures/student1.svg"></Testimonial.Image>
              <Testimonial.Name>Riha Khan</Testimonial.Name>
              <Testimonial.Position>class-1</Testimonial.Position>
            </Testimonial.Students>

            <Testimonial.Students>
              <Testimonial.Image src="images/pictures/student1.svg"></Testimonial.Image>
              <Testimonial.Name>Vishal Sharma</Testimonial.Name>
              <Testimonial.Position>class-3</Testimonial.Position>
            </Testimonial.Students>

            <Testimonial.Students>
              <Testimonial.Image src="images/pictures/student1.svg"></Testimonial.Image>
              <Testimonial.Name>Anuj Tomar</Testimonial.Name>
              <Testimonial.Position>class-5</Testimonial.Position>
            </Testimonial.Students>
          </Testimonial.Frame>
        </Testimonial.Div>
      </Testimonial>
    </>
  );
}
