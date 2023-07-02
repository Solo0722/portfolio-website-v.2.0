import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TitleBar from "../components/TitleBar";
import { Button, Spin } from "antd";
import { MEDIA_QUERIES } from "../utils/constants";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../utils/data";
import { defaultTheme } from "../theme/appTheme";
import IonIcon from "../components/IonIcon";

const Projects = () => {
  const [activeProjectType, setActiveProjectType] = useState("web");

  const projectTypeBtns = [
    {
      name: "Web apps",
      value: "web",
    },
    {
      name: "Mobile apps",
      value: "mobile",
    },
    {
      name: "Desktop apps",
      value: "desktop",
    },
    {
      name: "Backend",
      value: "backend",
    },
  ];

  return (
    <ProjectsWrapper id="projects">
      <TitleBar title="Projects I have worked on" />
      <ProjectSubHeader>
        <p className="subHeaderText">
          Explore a few of the projects that I have worked on.
        </p>
        <ButtonsWrapper>
          <Button.Group>
            {projectTypeBtns.map((btn) => (
              <Button
                key={btn.value}
                type={
                  btn.value.toLowerCase() === activeProjectType
                    ? "primary"
                    : "ghost"
                }
                onClick={() => {
                  setActiveProjectType(btn.value);
                }}
                style={{
                  color: "#fff",
                }}
              >
                {btn.name}
              </Button>
            ))}
          </Button.Group>
        </ButtonsWrapper>
        <div className="mobile-btns-wrapper">
          <HorizontalOverflowContainer>
            {projectTypeBtns.map((btn) => (
              <div style={{ display: "inline-block" }} key={btn.value}>
                <Button
                  type={
                    btn.value.toLowerCase() === activeProjectType
                      ? "primary"
                      : "ghost"
                  }
                  onClick={() => {
                    setActiveProjectType(btn.value);
                  }}
                  style={{
                    color: "#fff",
                  }}
                >
                  {btn.name}
                </Button>
              </div>
            ))}
          </HorizontalOverflowContainer>
        </div>
      </ProjectSubHeader>
      <ProjectBody as={motion.div} layout>
        {
          <AnimatePresence>
            {projects
              .filter((prj) => prj.projectType === activeProjectType)
              .map((project) => (
                <ProjectBox
                  as={motion.div}
                  layout
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  key={project.name}
                >
                  <img
                    src={project.image_url}
                    alt="project-img"
                    loading="lazy"
                  />
                  <div className="textBox">
                    <div className="textBoxText">
                      <h4>{project.name}</h4>
                      <p>
                        <span>{project.description}</span>
                        <br />
                        <span>
                          Made with:{" "}
                          {project.tools.map((tool) => (
                            <span>{tool},</span>
                          ))}
                        </span>
                      </p>
                      <div className="buttons-wrapper">
                        <Button
                          type="default"
                          icon={<IonIcon iconName="globe-outline" />}
                          className="project-btn"
                          href={project.url}
                          target="_blank"
                        />
                        <Button
                          type="default"
                          icon={<IonIcon iconName="logo-github" />}
                          className="project-btn"
                          href={project.github_repo}
                          target="_blank"
                        />
                      </div>
                    </div>
                  </div>
                </ProjectBox>
              ))}
          </AnimatePresence>
        }
      </ProjectBody>
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 6rem;

  .mobile-btns-wrapper {
    width: 100%;
    display: none;
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
    .mobile-btns-wrapper {
      display: block;
    }
  }
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

  ${MEDIA_QUERIES.TABLET} {
    & {
      flex-direction: column;
    }

    .subHeaderText {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column;
    }

    .subHeaderText {
      width: 100%;
      margin-bottom: 1rem;
    }
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

  ${MEDIA_QUERIES.MOBILE} {
    & {
      display: none;
    }
  }
`;

const ProjectBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ProjectBox = styled.div`
  width: 32%;
  height: 300px;
  margin: 1rem 0;
  border-radius: 2px;
  cursor: pointer;

  box-shadow: 0 2px 4px ${defaultTheme.accentColor};
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;

  & .textBox {
    opacity: 1;
    background-image: linear-gradient(120deg, #e00e27 0%, #f5576c 100%);
    transform: translateY(calc(100% - 5px));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* gap: 15px; */
    transition: 0.2s ease-in-out;
    z-index: 10;
    position: absolute;
    /* top: 100%; */
    bottom: 0;
    right: 0;
    left: 0;
    height: 10px;
  }

  & .textBoxText {
    display: none;
    padding: 1rem;
  }

  &.textBoxText > h4,
  & .textBoxText > p {
    margin: 0.5rem 0;
    width: 100%;
  }

  & .textBoxText > p {
    font-weight: 400;
  }

  &:hover > .textBox {
    opacity: 1;
    transform: translateY(0%);
    height: 100%;

    & > .textBoxText {
      display: flex;
      flex-direction: column;
    }
  }

  & .buttons-wrapper {
    display: flex;
    flex-direction: row;
    margin: 0.5rem 0;
  }

  & .buttons-wrapper > a {
    margin-right: 0.5rem;
  }

  & .buttons-wrapper > .project-btn {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: calc(100% - 5px);
  }

  ${MEDIA_QUERIES.TABLET} {
    & {
      width: 48%;
    }
  }
  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
    }
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

export default Projects;
