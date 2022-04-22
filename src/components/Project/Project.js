import React, { useState } from "react";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

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

  return (
    <div className="project">
      <div className="project-head">Projects</div>
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
              All
            </button>
            <button
              className={tab === 1 ? "active" : ""}
              onClick={() => tabChange(1)}
            >
              Web Development
            </button>
            <button
              className={tab === 2 ? "active" : ""}
              onClick={() => tabChange(2)}
            >
              ML/AI
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
