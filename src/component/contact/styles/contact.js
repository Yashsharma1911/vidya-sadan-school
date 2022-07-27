import styled from "styled-components";

export const Container = styled.div``;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FrameOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 441px;
  margin-top: 120px;
`;

export const Section = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #96bb7c;
`;

export const Heading = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #252b42;
  margin-top: 10px;
`;

export const SubHeading = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #737373;
  margin-top: 10px;
`;

export const FrameTwo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  
  @media (max-width: 820px) {
    margin-top: 80px;
    align-items: center;
  }
`;

export const DetailsOne = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const NameDetails = styled.div`
  padding: 20px;
`;

export const Details = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.2px;
  color: #000000;
`;

export const Name = styled.div`
  & > input {
    width: 373px;
    height: 53px;
    font-style: normal;
    padding: 5px;

    background: rgba(242, 255, 252, 0.63);
    border: 2px solid rgba(0, 0, 0, 0.02);
    border-radius: 5px;
  }

  @media (max-width: 380px) {
    & > input {
      width: 280px;
    }
  }
`;

export const EmailDetails = styled.div`
  padding: 20px;
`;

export const Email = styled.div`
  & > input {
    width: 373px;
    height: 53px;
    font-style: normal;
    padding: 5px;

    background: rgba(242, 255, 252, 0.63);
    border: 2px solid rgba(0, 0, 0, 0.02);
    border-radius: 5px;
  }

  @media (max-width: 380px) {
    & > input {
      width: 280px;
    }
  }
`;

export const DetailsTwo = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const InterestDetails = styled.div`
  padding: 20px;
`;

export const Interest = styled.div`
  & > select {
    width: 373px;
    height: 53px;
    padding: 5px;

    background: rgba(242, 255, 252, 0.63);
    border: 2px solid rgba(0, 0, 0, 0.02);
    border-radius: 5px;
  }

  @media (max-width: 380px) {
    & > select {
      width: 280px;
    }
  }
`;

export const NumberDetails = styled.div`
  padding: 20px;
`;

export const Number = styled.div`
  & > input {
    width: 373px;
    height: 53px;
    font-style: normal;
    padding: 5px;

    background: rgba(242, 255, 252, 0.63);
    border: 2px solid rgba(0, 0, 0, 0.02);
    border-radius: 5px;
  }

  @media (max-width: 380px) {
    & > input {
      width: 280px;
    }
  }
`;

export const DetailsThree = styled.div``;

export const QuerryDetails = styled.div`
  padding: 20px;
`;

export const Querry = styled.div`
  & > textarea {
    background: rgba(242, 255, 252, 0.63);
    border: 2px solid rgba(0, 0, 0, 0.02);
    border-radius: 5px;
    font-style: normal;
    padding: 5px;
    width: 100%;
  }

  @media (max-width: 820px) {
    & > textarea {
      height: 10em;
    }
  }

  @media (max-width: 380px) {
    & > textarea {
      height: 13em;
    }
  }
`;

export const ButtonLink = styled.div`
  padding: 20px;
`;

export const Button = styled.button`
  width: 373px;
  height: 65px;

  background: #96bb7c;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #fffbfb;
  border-radius: 5px;
  border: 0px;
  &:hover {
    background: #fffbfb;
    color: #96bb7c;
    border: 2px solid #96bb7c;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  @keyframes shine {
    0% {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
    50% {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
    100% {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 380px) {
    width: 280px;
  }
`;
