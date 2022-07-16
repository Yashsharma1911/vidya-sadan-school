import React from "react";
import About from "../component/about";
import TeacherContainer from "./teacher";

export default function AboutContainer() {
  return (
    <>
      <About>
        <About.Div>
          <About.FrameOne>
            <About.Heading>Our mission</About.Heading>
            <About.Text>
              We are on a mission to provide a premier educational experience
              customized to the needs of each student.
            </About.Text>
          </About.FrameOne>

          <About.FrameTwo>
            <About.MessageContainer>
              <About.Message>
                What distinguishes a great school from a good school? I believe
                that clarity of purpose, exceptional teachers, and demonstrated
                outcomes are hallmarks of great schools. A great school is a
                place with a deep commitment to student learning, where faculty
                nourish the intellectual, moral, emotional, and social growth of
                every student. It is a place where students, teachers, and
                parents embark together on an academic journey with clear and
                well-defined objectives. It is filled with the joy of discovery
                and the excitement of personal challenge and growth. It is a
                community dedicated to developing strength of character and
                excellence in all dimensions of its students' lives. And it is a
                place that has a distinctive and lasting impact.
                <br />
                <br />
                The Vidhya Sadan School strives to be a great school. Our
                mission, simply put, is to prepare students for lives of
                purpose, achievement, and generosity of spirit. Our school set
                out with this mission in 2007, and it continues to guide
                everything that we do.
                <br />
                <br />
                As a connected to madhayamik learning community, Potomac offers
                many exciting advantages. Just three miles from the rich
                resources of the nation's capital, our modern campus is situated
                on 90 beautiful, wooded acres. Our talented faculty are experts
                in their disciplines with a deep commitment to student success;
                they truly get to know each child, providing the challenge,
                support, and encouragement that fosters learning and personal
                growth. Our rigorous program of inquiry and study empowers
                students to exercise their intellectual curiosity, expand their
                understanding, and develop critical skills for future success.
                And our emphasis on character and values challenges each student
                to be a person of integrity, a contributing member of our school
                community, and a thoughtful and involved citizen of the world.
                <br />
                <br />
                I encourage you toexplore our website to learn more about all
                that The Potomac School has to offer. I also invite you to visit
                us in person; please contact our Admission Office to schedule
                your campus tour. We hope to see you soon!
                <br />
                <br />
                All my best,
                <br />
                <br />
                <img src="images/pictures/Praveen.png" alt="" />
                <br />
                Praveen Dubey
                <br />
                Head of School
              </About.Message>
            </About.MessageContainer>

            <About.Poster>
              <About.Image
                src="images/pictures/headmaster.svg"
                alt=""
              ></About.Image>
              <About.Head>Head Master</About.Head>
              <About.Tag>
                <hr />
              </About.Tag>
              <About.Quote>
                Praveen Dubey has been a teacher, coach, and leader of Vidhya
                sadan school for more than 10 years. He is teacher of
                Mathematics and physics
              </About.Quote>
            </About.Poster>
          </About.FrameTwo>

          <About.FrameThree>
            <About.Heading>Expert Teachers</About.Heading>
            <About.Text>Meet with our Teachers</About.Text>
            <About.CardSection>
              <TeacherContainer
                image="images/pictures/teacher1.png"
                name="Adarsh Jain"
                subject="Mathematics"
                description="Slate helps you see how many more days  you need to work to reach your financial goal for the month and year."
              />
               <TeacherContainer
                image="images/pictures/teacher1.png"
                name="Itti Sharma"
                subject="Environment"
                description="Slate helps you see how many more days  you need to work to reach your financial goal for the month and year."
              />
              <TeacherContainer
                image="images/pictures/teacher1.png"
                name="Sakshi Roy"
                subject="Biology"
                description="Slate helps you see how many more days  you need to work to reach your financial goal for the month and year."
              />
              <TeacherContainer
                image="images/pictures/teacher1.png"
                name="Adarsh Jain"
                subject="Mathematics"
                description="Slate helps you see how many more days  you need to work to reach your financial goal for the month and year."
              />
              <TeacherContainer
                image="images/pictures/teacher1.png"
                name="Adarsh Jain"
                subject="Mathematics"
                description="Slate helps you see how many more days  you need to work to reach your financial goal for the month and year."
              />
              <TeacherContainer
                image="images/pictures/teacher1.png"
                name="Adarsh Jain"
                subject="Mathematics"
                description="Slate helps you see how many more days  you need to work to reach your financial goal for the month and year."
              />
              
            </About.CardSection>
          </About.FrameThree>
        </About.Div>
      </About>
    </>
  );
}
