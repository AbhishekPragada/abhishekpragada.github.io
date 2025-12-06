import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import BlurImage from "./BlurImage";
import coinTrailLight from "../../image/coinTrail-light.png";
import coinTrailDark from "../../image/coinTrail-dark.png";

const FeaturedProject = ({ isDark = true }) => {
  const getFeaturedProjects = () => [
    {
      projectName: "DistributedFlow",
      projectDescription: "A distributed task scheduler supporting DAG-based workflows with retry mechanisms, parallel execution, and automatic failure recovery. Built with event-driven architecture using Kafka for task queuing and Redis-based distributed locking for horizontal scalability.",
      projectImageLight: coinTrailLight,
      projectImageDark: coinTrailDark,
      projectTools: ["SpringBoot", "Kafka", "Redis", "PostgreSQL", "WebSocket", "React"],
      projectRepo: "https://github.com/AbhishekPragada/DistributedFlow",
      projectLink: "https://distributedflow.netlify.app/",
      category: "Web Development",
    },
    {
      projectName: "CoinTrail",
      projectDescription: "A scalable expense tracker with microservice architecture handling personal, group, and subscription-based expenses. Features Firebase auth, RazorPay integration, and analytics dashboard with Recharts.",
      projectImageLight: coinTrailLight,
      projectImageDark: coinTrailDark,
      projectTools: ["React", "SpringBoot", "MongoDB", "Docker", "RazorPay"],
      projectRepo: "https://github.com/AbhishekPragada/CoinTrail",
      projectLink: "https://cointrail.vercel.app/",
      category: "Web Development",
    },
  ];

  const cardClasses = isDark
    ? "relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 md:p-8 rounded-3xl shadow-xl ring-1 ring-slate-700/50"
    : "relative bg-white p-6 md:p-8 rounded-3xl shadow-lg ring-1 ring-slate-200/80 border border-slate-100";

  const tagClasses = isDark
    ? "text-xs px-3 py-1 rounded-full bg-slate-700/30 text-slate-200"
    : "text-xs px-3 py-1 rounded-full bg-slate-50 text-slate-700";

  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex flex-col gap-10 mb-12">
      {featuredProjects.map((project, idx) => {
        const imageOnLeft = idx % 2 === 0; // alternate image position
        const projectImage = isDark ? project.projectImageDark : project.projectImageLight;

        return (
          <motion.article
            key={project.projectName}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            className={`${cardClasses} group`}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center`}>
              {/* image column */}
              <div className={`lg:col-span-6 ${imageOnLeft ? 'lg:order-1' : 'lg:order-2'} w-full`}>
                {projectImage ? (
                  <BlurImage
                    src={projectImage}
                    alt={`${project.projectName} screenshot`}
                    isDark={isDark}
                  />
                ) : (
                  <div
                    className={`rounded-xl h-56 md:h-64 lg:h-48 flex items-center justify-center ${
                      isDark ? "bg-slate-900/40 text-slate-500" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    No image
                  </div>
                )}
              </div>

              {/* content column */}
              <div className={`lg:col-span-6 ${imageOnLeft ? 'lg:order-2' : 'lg:order-1'} flex flex-col gap-4`}>
                <div className="inline-flex items-center gap-3 mb-2">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      isDark
                        ? "bg-teal-300/10 text-teal-200"
                        : "bg-indigo-50 text-indigo-600"
                    }`}
                  >
                    Featured Project
                  </span>
                </div>
                <h3 className={`text-2xl font-semibold ${isDark ? "text-slate-200" : "text-slate-900"}`}>
                  {project.projectName}
                </h3>
                <p
                  className={`text-sm leading-relaxed max-w-2xl ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {project.projectDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.projectTools.map((tool, index) => (
                    <span key={index} className={tagClasses}>
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.projectRepo}
                      target="_blank"
                      rel="noreferrer"
                      title="Source Code"
                      className={`group inline-flex items-center justify-center h-10 w-10 rounded-md transition-all duration-200 ${
                        isDark
                          ? "bg-slate-800/40 hover:bg-slate-700/30"
                          : "bg-white shadow-sm border hover:shadow-md"
                      }`}
                    >
                      <Github size={16} className={`${isDark ? "text-slate-300" : "text-slate-700"} transition-transform group-hover:scale-110`} />
                    </a>
                    {project.projectLink && (
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noreferrer"
                        title="View Live"
                        className={`group inline-flex items-center justify-center h-10 w-10 rounded-md transition-all duration-200 ${
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
              </div>
            </div>
            {/* subtle footer */}
            <div
              className={`absolute left-6 right-6 bottom-4 h-px rounded ${
                isDark ? "bg-slate-700/20" : "bg-slate-100"
              }`}
            />
          </motion.article>
        );
      })}
    </div>
  );
};

export default FeaturedProject;
