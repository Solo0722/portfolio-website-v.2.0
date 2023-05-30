import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../theme/appTheme";
import TitleBar from "../components/TitleBar";
import myImg from "../assets/images/my-image.jpg";
import { skillsets } from "../utils/data";

const About = () => {
  return (
    <AboutWrapper>
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
        <HorizontalOverflowContainer>
          {skillsets.map((skill) => (
            <div style={{ display: "inline-block" }} key={skill.name}>
              <SkillBox>
                <img src={skill.image} alt="skill-logo" />
                <p>{skill.name}</p>
              </SkillBox>
            </div>
          ))}
        </HorizontalOverflowContainer>
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
`;

const AboutHeader = styled.div`
  h2 {
    font-family: "Lobster Two", "Montserrat", sans-serif;
    margin: 1rem 0;
    position: relative;
    width: 100%;
    white-space: nowrap;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  h2::after {
    content: "";
    display: block;
    position: relative;
    top: 0px;
    width: 300px;
    height: 1px;
    margin-left: 10px;
    background-color: rgba(230, 230, 255, 0.5);
  }
`;

const AboutBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const AboutDescription = styled.div`
  width: 65%;
  height: 100%;
  margin-top: 1rem;
`;

const MyImageWrapper = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
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
