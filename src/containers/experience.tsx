import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../theme/appTheme";
import { Timeline } from "antd";
import { experienceData } from "../utils/data";
import TitleBar from "../components/TitleBar";
import { MEDIA_QUERIES } from "../utils/constants";

const Experience = () => {
  return (
    <ExperienceWrapper>
      <TitleBar title="Experience I have gained" />
      <TimelineWrapper>
        <Timeline mode="left">
          {experienceData.map((data, index) => (
            <Timeline.Item
              children={data.children}
              style={{ color: "#fff" }}
              key={index}
            />
          ))}
        </Timeline>
      </TimelineWrapper>
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

  ${MEDIA_QUERIES.TABLET} {
    & {
      padding: 6rem 2rem;
    }
  }
  ${MEDIA_QUERIES.MOBILE} {
    & {
      padding: 6rem 1rem;
    }
  }
`;

const TimelineWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;

  h3 {
    color: #fff;
  }
`;

export default Experience;
