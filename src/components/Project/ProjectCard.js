import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ projectName, projectDescription, projectTools, projectRepo, projectLink, isDark = true }) => {
  const cardClasses = isDark
    ? "relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 rounded-2xl shadow-lg ring-1 ring-slate-700/40"
    : "relative bg-white p-6 rounded-2xl shadow-sm ring-1 ring-slate-100 border border-slate-100";

  const tagClasses = isDark
    ? "text-xs px-3 py-1 rounded-full bg-slate-700/30 text-slate-200"
    : "text-xs px-3 py-1 rounded-full bg-slate-50 text-slate-700";

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      className={cardClasses}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className={`text-xl font-semibold mb-2 ${isDark ? "text-slate-200" : "text-slate-900"}`}>
            {projectName}
          </h3>
          <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            {projectDescription}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {projectTools.map((tool, index) => (
              <span key={index} className={tagClasses}>
                {tool}
              </span>
            ))}
          </div>
        </div>
        {(projectRepo || projectLink) && (
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-2">
              {projectRepo && (
                <a
                  href={projectRepo}
                  target="_blank"
                  rel="noreferrer"
                  title="Source Code"
                  className={`group inline-flex items-center justify-center h-9 w-9 rounded-md transition-all duration-200 ${
                    isDark
                      ? "bg-slate-800/40 hover:bg-slate-700/30"
                      : "bg-white shadow-sm border hover:shadow-md"
                  }`}
                >
                  <Github size={16} className={`${isDark ? "text-slate-300" : "text-slate-700"} transition-transform group-hover:scale-110`} />
                </a>
              )}
              {projectLink && (
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noreferrer"
                  title="View Live"
                  className={`group inline-flex items-center justify-center h-9 w-9 rounded-md transition-all duration-200 ${
                    isDark
                      ? "bg-slate-800/40 hover:bg-slate-700/30"
                      : "bg-white shadow-sm border hover:shadow-md"
                  }`}
                >
                  <ExternalLink 
                    size={16} 
                    className={`${isDark ? "text-slate-300" : "text-slate-700"} transition-transform group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} 
                  />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
      {/* subtle footer */}
      <div
        className={`absolute left-6 right-6 bottom-4 h-px rounded ${
          isDark ? "bg-slate-700/20" : "bg-slate-100"
        }`}
      />
    </motion.article>
  );
};

export default ProjectCard;
