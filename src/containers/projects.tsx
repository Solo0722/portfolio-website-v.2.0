import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TitleBar from "../components/TitleBar";
import { Button, Spin } from "antd";
import projectImg from "../assets/images/img.jpg";
import { MEDIA_QUERIES } from "../utils/constants";
import { client, urlFor } from "../utils/sanity/sanityClient";
import { projectsQuery } from "../utils/sanity/sanityQueries";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [activeProjectType, setActiveProjectType] = useState("webapps");

  const projectTypeBtns = [
    {
      name: "Web apps",
      value: "webapps",
      set: ["", "", "", "", "", "", "", "", ""],
    },
    {
      name: "Mobile apps",
      value: "mobileapps",
      set: ["", "", "", "", "", ""],
    },
    {
      name: "Desktop apps",
      value: "desktopapps",
      set: ["", ""],
    },
    {
      name: "Backend",
      value: "backend",
      set: ["", "", "", "", "", "", "", "", "", "", "", ""],
    },
  ];

  // useEffect(() => {
  //   setLoading(true);
  //   client
  //     .fetch(projectsQuery)
  //     .then((results) => {
  //       setProjects(results);
  //       console.log(results);
  //     })
  //     .catch((err) => console.error(err))
  //     .finally(() => setLoading(false));
  // }, []);

  const [p, setP] = useState(["", "", "", "", "", "", "", "", "", "", ""]);

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
                  setP(btn.set);
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
                    setP(btn.set);
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
        {loading ? (
          <Spin />
        ) : (
          <AnimatePresence>
            {projects?.map((project) => (
              <ProjectBox
                as={motion.div}
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                key={project?._id}
              >
                <img
                  src={urlFor(project?.image).url()}
                  alt="project-img"
                  loading="lazy"
                />
              </ProjectBox>
            ))}
          </AnimatePresence>
        )}
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
  width: 33%;
  height: 300px;
  margin: 1rem 0;
  border-radius: 2px;

  img {
    width: 100%;
    height: 100%;
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
