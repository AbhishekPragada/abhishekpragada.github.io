import React, { useState, useEffect } from "react";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";

import projectdata from "../../data/projects.json";

function Project() {
  const [tab, tabChange] = useState(0);
  const projecttabdata = projectdata.filter((prj) => {
    if (tab === 0) {
      return prj;
    } else {
      return prj.projectType === tab;
    }
  });

  useEffect(() => {
    AOS.init({once: true});
    AOS.refresh();
  }, []);

  return (
    <div className="project" id="projects">
      <div className="project-head" data-aos={"fade-down"} data-aos-duration={"1000"}>Projects</div>
      <div className="project-content">
        <div className="project-featured">
          <FeaturedProject />
        </div>
        <div className="project-other">
          <div className="project-tab">
            <button
              className={tab === 0 ? "active" : ""}
              onClick={() => tabChange(0)}
            >
              <span>All</span>
            </button>
            <button
              className={tab === 1 ? "active" : ""}
              onClick={() => tabChange(1)}
            >
               <span>Web Development</span>
            </button>
            <button
              className={tab === 2 ? "active" : ""}
              onClick={() => tabChange(2)}
            >
               <span>ML/AI</span>
            </button>
          </div>
          <div className="project-tab-content-1">
            <ul className="project-tab-grid">
              {projecttabdata.map((prj) => {
                return (
                  <li>
                    <ProjectCard
                      projectName={prj.projectName}
                      projectDescription={prj.projectDescription}
                      projectTools={prj.projectTools}
                      projectRepo = {prj.projectRepo}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="project-tab-content-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Project;
