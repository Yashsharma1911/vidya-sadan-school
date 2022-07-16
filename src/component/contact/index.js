import React from "react";
import {
    Container,
    FrameOne,
    FrameTwo,
    Heading,
    Div,
    Section,
    SubHeading,
    DetailsOne,
    DetailsTwo,
    DetailsThree,
    NameDetails,
    Details,
    Name,
    EmailDetails,
    Email,
    InterestDetails,
    Interest,
    NumberDetails,
    Number,
    QuerryDetails,
    Querry,
    ButtonLink,
    Button,
  } from "./styles/contact";

export default function Contact({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Contact.Div = function ContactDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>;
};

Contact.FrameOne = function ContactFrameOne({ children, ...restProps }) {
  return <FrameOne {...restProps}>{children}</FrameOne>;
};

Contact.Section = function ContactSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Contact.Heading = function ContactHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Contact.SubHeading = function ContactSubHeading({ children, ...restProps }) {
  return <SubHeading {...restProps}>{children}</SubHeading>;
};

Contact.FrameTwo = function ContactFrameTwo({ children, ...restProps }) {
  return <FrameTwo {...restProps}>{children}</FrameTwo>;
};

Contact.DetailsOne = function ContactDetailsOne({ children, ...restProps }) {
  return <DetailsOne {...restProps}>{children}</DetailsOne>;
};

Contact.NameDetails = function ContactNameDetails({ children, ...restProps }) {
  return <NameDetails {...restProps}>{children}</NameDetails>;
};

Contact.Details = function ContactDetails({ children, ...restProps }) {
  return <Details {...restProps}>{children}</Details>;
};

Contact.Name = function ContactName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Contact.EmailDetails = function ContactEmailDetails({
  children,
  ...restProps
}) {
  return <EmailDetails {...restProps}>{children}</EmailDetails>;
};

Contact.Email = function ContactEmail({ children, ...restProps }) {
  return <Email {...restProps}>{children}</Email>;
};

Contact.DetailsTwo = function ContactDetailsTwo({ children, ...restProps }) {
  return <DetailsTwo {...restProps}>{children}</DetailsTwo>;
};

Contact.InterestDetails = function ContactInterestDetails({
  children,
  ...restProps
}) {
  return <InterestDetails {...restProps}>{children}</InterestDetails>;
};

Contact.Interest = function ContactInterest({ children, ...restProps }) {
  return <Interest {...restProps}>{children}</Interest>;
};

Contact.NumberDetails = function ContactNumberDetails({
  children,
  ...restProps
}) {
  return <NumberDetails {...restProps}>{children}</NumberDetails>;
};

Contact.Number = function ContactNumber({ children, ...restProps }) {
  return <Number {...restProps}>{children}</Number>;
};

Contact.DetailsThree = function ContactDetailsThree({
  children,
  ...restProps
}) {
  return <DetailsThree {...restProps}>{children}</DetailsThree>;
};

Contact.QuerryDetails = function ContactQuerryDetails({
  children,
  ...restProps
}) {
  return <QuerryDetails {...restProps}>{children}</QuerryDetails>;
};

Contact.Querry = function ContactQuerry({ children, ...restProps }) {
  return <Querry {...restProps}>{children}</Querry>;
};

Contact.ButtonLink = function ContactButtonLink({ children, ...restProps}) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Contact.Button = function ContactButton({ children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}