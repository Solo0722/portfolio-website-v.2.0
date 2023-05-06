import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../theme/appTheme";
import TitleBar from "../components/TitleBar";

const About = () => {
  return (
    <AboutWrapper>
      <TitleBar title={"About Me"} number={1} />
      <AboutDescription>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero esse
          aliquid maiores porro voluptas. Nesciunt aspernatur obcaecati facere
          alias soluta cum officiis, placeat, vero, unde sed facilis ullam dolor
          eum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
          magni dolor provident molestias iste inventore, quam id cumque
          deserunt ducimus fugit ut pariatur quaerat magnam laudantium
          necessitatibus aliquid ullam. Id. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Libero esse aliquid maiores porro
          voluptas. Nesciunt aspernatur obcaecati facere alias soluta cum
          officiis, placeat, vero, unde sed facilis ullam dolor eum. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Veniam magni dolor
          provident molestias iste inventore, quam id cumque deserunt ducimus
          fugit ut pariatur quaerat magnam laudantium necessitatibus aliquid
          ullam. Id.
        </p>
        <p>Below are a few technologies I work with: </p>
      </AboutDescription>
      <TechnologiesWrapper></TechnologiesWrapper>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  padding: 6rem;
`;

const AboutDescription = styled.div`
  & p,
  small {
    line-height: 2rem;
    font-size: 12px;
    text-align: justify;
    text-justify: distribute;
  }

  & ul {
    list-style-position: inside;
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
  }

  & li {
    list-style-type: square;
  }
  & li::marker {
    color: ${defaultTheme.primaryColor};
    background-color: ${defaultTheme.primaryColor};
  }
`;

const TechnologiesWrapper = styled.div``;

export default About;
