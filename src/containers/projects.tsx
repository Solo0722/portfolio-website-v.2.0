import React from "react";
import styled from "styled-components";
import TitleBar from "../components/TitleBar";

const Projects = () => {
  return (
    <ProjectsWrapper>
      <TitleBar title="Projects I have worked on"/>
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  padding: 6rem;
`;

export default Projects;
