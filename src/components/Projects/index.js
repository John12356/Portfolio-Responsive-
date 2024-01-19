import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From Console apps, Frontend
          projects to Full stack MERN apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "mern" ? (
            <ToggleButton active value="mern" onClick={() => setToggle("mern")}>
              MERN
            </ToggleButton>
          ) : (
            <ToggleButton value="mern" onClick={() => setToggle("mern")}>
              MERN
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Frontend" ? (
            <ToggleButton
              active
              value="Frontend"
              onClick={() => setToggle("Frontend")}
            >
              FRONTEND
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Frontend"
              onClick={() => setToggle("Frontend")}
            >
              FRONTEND
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Console" ? (
            <ToggleButton
              active
              value="Console"
              onClick={() => setToggle("Console")}
            >
              CONSOLE
            </ToggleButton>
          ) : (
            <ToggleButton value="Console" onClick={() => setToggle("Console")}>
              CONSOLE
            </ToggleButton>
          )}
          <Divider />
          {toggle === "IOT" ? (
            <ToggleButton active value="IOT" onClick={() => setToggle("IOT")}>
              IOT
            </ToggleButton>
          ) : (
            <ToggleButton value="IOT" onClick={() => setToggle("IOT")}>
              IOT
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
