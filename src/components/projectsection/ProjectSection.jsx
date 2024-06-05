/* eslint-disable no-unused-vars */
import GitHub from "../../assets/svg/GitHub";
import JavaScript from "../../assets/svg/JavaScript";
import Link from "../../assets/svg/Link";
// import MERN from "../../assets/svg/MERN";
import React from "../../assets/svg/React";
import Sass from "../../assets/svg/SCSS";
import Project from "./Project";
import "./ProjectSection.scss";

const ProjectSection = () => {
  return (
    <section className="projectsContainer">
      <h5>..samples..</h5>
      <div className="samples">
        <Project
          projectTitle="nothing2Trash"
          projectDescription="3tes Team- und Abschlussprojekt Backend"
          technologies={[
            <React key="react" />,
            <JavaScript key="javascript" />,
            <Sass key="sass" />,
            // <MERN key="mern" />,
          ]}
          repo={
            <a
              href="https://github.com/michaelsupercode/Team-F4_Backend_final_thesis"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
          }
          demo={
            <a target="blank" href="https://trashfront.onrender.com/">
              <Link />
            </a>
          }
        />

        <Project
          projectTitle="drinks&chill"
          projectDescription="2tes Team- und Abschlussprojekt Frontend"
          technologies={[
            <React key="react" />,
            <JavaScript key="javascript" />,
            // <Sass key="sass" />,
          ]}
          repo={
            <a
              target="blank"
              href="https://github.com/michaelsupercode/Abschlussprojekt-Frontend"
            >
              <GitHub />
            </a>
          }
          demo={
            <a target="blank" href="https://s-c-frontend-final.vercel.app/">
              <Link />
            </a>
          }
        />

        <Project
          projectTitle="R-P-S"
          projectDescription="bewertete Prüfungsaufgabe javascript"
          technologies={[
            <React key="react" />,
            <JavaScript key="javascript" />,
            // <Sass key="sass" />,
          ]}
          repo={
            <a
              target="blank"
              href="https://github.com/michaelsupercode/project-RPS"
            >
              <GitHub />
            </a>
          }
          demo={
            <a target="blank" href="https://sc-rps-project.vercel.app/">
              <Link />
            </a>
          }
        />
      </div>
    </section>
  );
};

export default ProjectSection;
