import React from "react";
import Contact from "../component/contact";
// import * as ROUTES from '../constants/routes'
import {useNavigate} from 'react-router-dom';

export default function ContactContainer() {
// add animation to button

const navigate = useNavigate();

const navigateToThanks = () => {
  navigate('/thankyou');
};

  return (
    <>
      <Contact>
        <Contact.Div>
          <Contact.FrameOne>
            <Contact.Section>Our memories</Contact.Section>
            <Contact.Heading>Get In Touch</Contact.Heading>
            <Contact.SubHeading>
              Contact us for any querry and help. Our team will response as soon
              as possible
            </Contact.SubHeading>
          </Contact.FrameOne>
          <Contact.FrameTwo>
            <Contact.DetailsOne>
              <Contact.NameDetails>
                <Contact.Details>Your Name</Contact.Details>
                <Contact.Name>
                  <form>
                    <input type="text" placeholder="Name" />
                  </form>
                </Contact.Name>
              </Contact.NameDetails>
              <Contact.EmailDetails>
                <Contact.Details>Your email</Contact.Details>
                <Contact.Email>
                  <form>
                    <input type="text" placeholder="youremail@gmail.com" />
                  </form>
                </Contact.Email>
              </Contact.EmailDetails>
            </Contact.DetailsOne>
            <Contact.DetailsTwo>
              <Contact.InterestDetails>
                <Contact.Details>What are you interested</Contact.Details>
                <Contact.Interest>
                  <form>
                    <select name="interest" placeholder="Select">
                      <option value="science">Science</option>
                      <option value="commerce">Commerce</option>
                      <option value="arts">Arts</option>
                      <option value="others">Others</option>
                    </select>
                  </form>
                </Contact.Interest>
              </Contact.InterestDetails>
              <Contact.NumberDetails>
                <Contact.Details>Mobile</Contact.Details>
                <Contact.Number>
                  <form>
                    <input type="text" placeholder="+91" />
                  </form>
                </Contact.Number>
              </Contact.NumberDetails>
            </Contact.DetailsTwo>
            <Contact.DetailsThree>
              <Contact.QuerryDetails>
                <Contact.Details>Message</Contact.Details>
                <Contact.Querry>
                  <form>
                    <textarea
                      rows={5}
                      cols={60}
                      placeholder="Let us know about your querry"
                    ></textarea>
                  </form>
                </Contact.Querry>
              </Contact.QuerryDetails>
            </Contact.DetailsThree>
            <Contact.ButtonLink>
              <Contact.Button onClick={navigateToThanks}>
                Just Send
              </Contact.Button>
            </Contact.ButtonLink>
          </Contact.FrameTwo>
        </Contact.Div>
      </Contact>
    </>
  );
}
