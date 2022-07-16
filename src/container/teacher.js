import React from "react";
import Teacher from "../component/teacher";

export default function TeacherContainer(props) {
  return (
    <>
      <Teacher>
        <Teacher.Section>
          <Teacher.SectionImage>
            <img src={props.image} alt='' />
          </Teacher.SectionImage>
          <Teacher.SectionName>
            <Teacher.Name>{props.name}</Teacher.Name>
            <Teacher.Branch>-{props.subject}</Teacher.Branch>
          </Teacher.SectionName>
          <Teacher.Bio>{props.description}</Teacher.Bio>
        </Teacher.Section>
      </Teacher>
    </>
  );
}
