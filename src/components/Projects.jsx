import React from "react";
import { projects } from "../data/main";
import { videoProject } from "../data/main";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <section className="wrapper mt-10">
      <ul className="cards">
        {/* VIDEO PROJECT */}
        <li className="card">
          <video autoPlay muted loop>
            <source src={videoProject.video} type="video/mp4" />
          </video>

          <div className="texts">
            <p className="text-xl">{videoProject.name}</p>
            <a
              href={videoProject.url}
              className="project-links text-lg"
              target="_blank"
            >
              VISIT WEBSITE
              <MdArrowOutward size={20} className="hover:transform-" />
            </a>
          </div>
        </li>

        {/* IMAGE PROJECT */}
        {projects.map((project) => (
          <li className="card" key={project.id}>
            <img src={project.img} alt={`Image of ${project.name}`} />
            <div className="texts">
              <p className="text-xl">{project.name}</p>
              <a
                href={project.url}
                className="project-links text-lg"
                target="_blank"
              >
                VISIT WEBSITE
                <MdArrowOutward size={20} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
