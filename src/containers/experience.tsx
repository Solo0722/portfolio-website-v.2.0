import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../theme/appTheme";
import { Timeline } from "antd";
import { experienceData } from "../utils/data";
import TitleBar from "../components/TitleBar";

const Experience = () => {
  return (
    <ExperienceWrapper>
      <TitleBar title="Experience I have gained" />
      <TimelineWrapper></TimelineWrapper>
    </ExperienceWrapper>
  );
};
const ExperienceWrapper = styled.section`
  width: 100%;
  min-height: 70vh;
  background-color: ${defaultTheme.accentColor};
  padding: 6rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: ; */
`;

const TimelineWrapper = styled.div`
  width: 100%;
  height: 100%;

  h3 {
    color: #fff;
  }
`;

export default Experience;
