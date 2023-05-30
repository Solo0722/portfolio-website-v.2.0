import React from "react";
import styled from "styled-components";
import TitleBar from "../components/TitleBar";
import { Button } from "antd";
import projectImg from "../assets/images/img.jpg";

const Projects = () => {
  const projectTypeBtns = [
    "Web apps",
    "Mobile apps",
    "Desktop apps",
    "Backend",
  ];

  const projects = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  return (
    <ProjectsWrapper>
      <TitleBar title="Projects I have worked on" />
      <ProjectSubHeader>
        <p className="subHeaderText">
          Explore a few of the projects that I have worked on.
        </p>
        <ButtonsWrapper>
          <Button.Group>
            {projectTypeBtns.map((btn) => (
              <Button
                type={btn.toLowerCase() === "web apps" ? "primary" : "ghost"}
                style={{
                  color: "#fff",
                }}
                htmlType="submit"
              >
                {btn}
              </Button>
            ))}
          </Button.Group>
        </ButtonsWrapper>
      </ProjectSubHeader>
      <ProjectBody>
        {projects.map((_) => (
          <ProjectBox>
            <img src={projectImg} alt="project-img" />
          </ProjectBox>
        ))}
      </ProjectBody>
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 6rem;
`;

const ProjectSubHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;

  .subHeaderText {
    width: 30%;
    line-height: 1.6rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    margin: 0 0.5rem;
    font-size: 12px;
  }
`;

const ProjectBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ProjectBox = styled.div`
  width: 32%;
  height: 300px;
  margin: 1rem 0;
  border-radius: 2px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default Projects;
