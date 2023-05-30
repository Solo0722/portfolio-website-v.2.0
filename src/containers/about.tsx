import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../theme/appTheme";
import TitleBar from "../components/TitleBar";
import myImg from "../assets/images/my-image.jpg";
import { skillsets } from "../utils/data";
import { MEDIA_QUERIES } from "../utils/constants";

const About = () => {
  return (
    <AboutWrapper id="about">
      <TitleBar title="About me" />
      <AboutBody>
        <AboutDescription>
          <p>
            Hola, I'm <b>Owusu-Ansah Solomon</b>, a self-taught passionate
            frontend developer with intermediate knowledge on backend
            development from Ghana. I'm currently studying BSc. Computer
            Engineering at Kwame Nkrumah University Of Science and Technology in
            Kumasi,Ghana.I have <b>3+ years</b> experience in frontend
            development.
          </p>
          <p>
            I am fueled by my passion for programming and ambition to better
            myself as a developer. I also consider myself as a "forever
            student", eager to both build on developing my skills and stay in
            tune with the latest technological advancement.
          </p>
          <p>
            I am fueled by my passion for programming and ambition to better
            myself as a developer. I also consider myself as a "forever
            student", eager to both build on developing my skills and stay in
            tune with the latest technological advancement.
          </p>
        </AboutDescription>
        <MyImageWrapper>
          <ImageContent>
            <img src={myImg} alt="my-pic" />
          </ImageContent>
        </MyImageWrapper>
      </AboutBody>
      <TechnologiesWrapper>
        <p>Below are a few of the technologies I have worked with: </p>
        <ul>
          {skillsets.map((skill) => (
            <li key={skill}>
              <small>{skill}</small>
            </li>
          ))}
        </ul>
      </TechnologiesWrapper>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 6rem;

  & p,
  small {
    font-weight: 400;
    line-height: 2rem;
    font-size: 12px;
    text-align: justify;
    text-justify: distribute;
  }

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

const AboutBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${MEDIA_QUERIES.TABLET} {
    & {
      flex-direction: column-reverse;
    }
  }
  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column-reverse;
    }
  }
`;

const AboutDescription = styled.div`
  width: 65%;
  height: 100%;
  margin-top: 1rem;

  ${MEDIA_QUERIES.TABLET} {
    & {
      width: 100%;
    }
  }
  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
    }
  }
`;

const MyImageWrapper = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  ${MEDIA_QUERIES.TABLET} {
    & {
      margin-top: 1rem;
      width: 100%;
    }
  }
  ${MEDIA_QUERIES.MOBILE} {
    & {
      margin-top: 1rem;
      width: 100%;
    }
  }
`;

const ImageContent = styled.div`
  width: 250px;
  height: 90%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    /* z-index: 100; */
  }
`;

const TechnologiesWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    list-style-type: disc;
    column-count: 3;
  }

  li {
    list-style-position: inside;
  }

  li::marker {
    color: ${defaultTheme.primaryColor};
  }

  small {
    font-weight: 400;
  }
`;

const HorizontalOverflowContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;

  p {
    word-wrap: break-all;
    word-break: normal;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SkillBox = styled.div`
  width: 80px;
  height: 100px;
  padding: 0.5rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: 80%;
  }
`;

export default About;
