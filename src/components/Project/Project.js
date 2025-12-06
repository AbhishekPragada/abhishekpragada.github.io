import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import { Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import projectdata from "../../data/projects.json";

function Project() {
  const [tab, tabChange] = useState(0);
  const isDark = useSelector((state) => state.isDarkMode);
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

  // Sync Redux state with document class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDark]);

  return (
    <section 
      className={isDark ? "bg-[#070918] text-slate-200" : "bg-gray-50 text-slate-900"} 
      id="projects"
      style={isDark ? { backgroundColor: '#070918' } : { backgroundColor: '#f9fafb' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Projects</h2>
          {/* Desktop tab buttons */}
          {/* <nav className="hidden md:flex gap-6 items-center">
            <button
              onClick={() => tabChange(0)}
              className={`relative text-sm font-medium pb-1 transition-colors ${
                tab === 0
                  ? isDark
                    ? "text-teal-300"
                    : "text-indigo-600"
                  : isDark
                  ? "text-slate-400 hover:text-slate-300"
                  : "text-slate-500"
              }`}
            >
              All
              {tab === 0 && (
                <span
                  className={`block h-0.5 w-8 rounded mt-2 ${
                    isDark ? "bg-teal-300" : "bg-indigo-600"
                  }`}
                />
              )}
            </button>
            <button
              onClick={() => tabChange(1)}
              className={`relative text-sm font-medium pb-1 transition-colors ${
                tab === 1
                  ? isDark
                    ? "text-teal-300"
                    : "text-indigo-600"
                  : isDark
                  ? "text-slate-400 hover:text-slate-300"
                  : "text-slate-500"
              }`}
            >
              Web Development
              {tab === 1 && (
                <span
                  className={`block h-0.5 w-8 rounded mt-2 ${
                    isDark ? "bg-teal-300" : "bg-indigo-600"
                  }`}
                />
              )}
            </button>
            <button
              onClick={() => tabChange(2)}
              className={`relative text-sm font-medium pb-1 transition-colors ${
                tab === 2
                  ? isDark
                    ? "text-teal-300"
                    : "text-indigo-600"
                  : isDark
                  ? "text-slate-400 hover:text-slate-300"
                  : "text-slate-500"
              }`}
            >
              ML/AI
              {tab === 2 && (
                <span
                  className={`block h-0.5 w-8 rounded mt-2 ${
                    isDark ? "bg-teal-300" : "bg-indigo-600"
                  }`}
                />
              )}
            </button>
          </nav> */}
        </div>

        {/* Mobile tab buttons */}
        <div className="md:hidden mb-6 flex gap-3 overflow-x-auto pb-2">
          <button
            onClick={() => tabChange(0)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm transition-colors ${
              tab === 0
                ? isDark
                  ? "bg-gradient-to-r from-teal-500/30 to-cyan-400/10 text-teal-200"
                  : "bg-indigo-100 text-indigo-600"
                : isDark
                ? "bg-slate-800/20 text-slate-400"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            All
          </button>
          <button
            onClick={() => tabChange(1)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm transition-colors ${
              tab === 1
                ? isDark
                  ? "bg-gradient-to-r from-teal-500/30 to-cyan-400/10 text-teal-200"
                  : "bg-indigo-100 text-indigo-600"
                : isDark
                ? "bg-slate-800/20 text-slate-400"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => tabChange(2)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm transition-colors ${
              tab === 2
                ? isDark
                  ? "bg-gradient-to-r from-teal-500/30 to-cyan-400/10 text-teal-200"
                  : "bg-indigo-100 text-indigo-600"
                : isDark
                ? "bg-slate-800/20 text-slate-400"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            ML/AI
          </button>
        </div>

        <div className="project-content">
          <div className="project-featured">
            <FeaturedProject isDark={isDark} />
          </div>
          <div className="project-other">
            <div className="project-tab-content-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projecttabdata.map((prj, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      projectName={prj.projectName}
                      projectDescription={prj.projectDescription}
                      projectTools={prj.projectTools}
                      projectRepo={prj.projectRepo}
                      projectLink={prj.projectLink}
                      isDark={isDark}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Empty state */}
        {projecttabdata.length === 0 && (
          <div
            className={`mt-12 text-center ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            No projects found for <strong>{tab === 0 ? "All" : tab === 1 ? "Web Development" : "ML/AI"}</strong>.
          </div>
        )}

      
      </div>
    </section>
  );
}

export default Project;
