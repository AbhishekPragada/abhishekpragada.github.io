import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedProject = (props) => {
  const featuredProjects = [
    {
      projectName: "DistributedFlow",
      projectDescription: "Built a distributed task scheduler supporting DAG-based workflows with retry mechanisms, parallel execution, and automatic failure recovery for complex data pipelines. Implemented event-driven architecture using Kafka for task queuing with exactly-once semantics, dead letter queues, and configurable retry policies handling 10K+ scheduled tasks daily. Designed worker pool with Redis-based distributed locking for concurrent task execution across multiple nodes, achieving horizontal scalability and preventing duplicate processing.",
      projectImage: "https://via.placeholder.com/600x300/64ffda/0a192f?text=DistributedFlow",
      projectTools: ["Spring Boot", "Kafka", "Redis", "PostgreSQL", "WebSocket", "React"],
      projectRepo: "https://github.com/AbhishekPragada/DistributedFlow",
      projectLink: "",
      direction: { flexDirection: "row" },
      headDirection: { alignItems: "flex-end" },
      descDirection: { transform: "translateX(-10%)" },
      toolDirection: { justifyContent: "flex-end", padding: "0px"},
      toolLIMargin: { margin: "0 0 0 50px" },
      linkDirection: { justifyContent: "flex-end", padding: "0px" },
      linkLIMargin: { margin: "0 0 0 50px" },
    },
    {
      projectName: "CoinTrail",
      projectDescription: "Architected a scalable expense tracker with modular microservice design, handling personal, group, and subscription-based expenses. Implemented role-based auth with Firebase and integrated RazorPay premium subscriptions with secure webhook handling. Developed recurring transaction engine using Spring Scheduler, ensuring fault tolerance and high availability. Built analytics dashboard with Recharts; designed modern UI with Tailwind CSS featuring dark/light mode for better UX.",
      projectImage: "https://via.placeholder.com/600x300/64ffda/0a192f?text=CoinTrail",
      projectTools: ["React", "Spring Boot", "MongoDB", "Docker", "RazorPay"],
      projectRepo: "https://github.com/AbhishekPragada/CoinTrail",
      projectLink: "",
      direction: { flexDirection: "row-reverse" },
      headDirection: { alignItems: "flex-start" },
      descDirection: { transform: "translateX(10%)" },
      toolDirection: { justifyContent: "flex-start", padding: "0px"},
      toolLIMargin: { margin: "0 50px 0 0"},
      linkDirection: { justifyContent: "flex-start", padding: "0px" },
      linkLIMargin: { margin: "0 50px 0 0" },
    },
  ];

  const [iconColor, setIconColor] = useState({
    color1: "#8892b0",
    color2: "#8892b0",
  });

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return featuredProjects.map((project, index) => {
    return (
      <div className="fp" style={project.direction}>
        <div className="fp-image">
          <img
            className="fp-image-class"
            src={project.projectImage}
            alt="loading..."
          />
        </div>
        <div className="fp-content">
          <div className="fp-head" style={project.headDirection}>
            <div className="fp-tag-featured">
            <span className="fp-head-featured">Featured Project</span>
            </div>
            <span className="fp-head-content">{project.projectName}</span>
          </div>
          <div className="fp-description" style={project.descDirection} data-aos={"zoom-out-right"}>
            <span className="fp-description-content">
              {project.projectDescription}
            </span>
          </div>
          <div className="fp-tools" >
            <ul style={project.toolDirection}>
              {project.projectTools.map((tools) => {
                return <li style={project.toolLIMargin}>{tools}</li>;
              })}
            </ul>
          </div>
          <div className="fp-links">
            <ul style={project.linkDirection}>
              <li style={project.toolLIMargin}>
                <a
                  href={project.projectRepo}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 172 172"
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <g fill={iconColor.color1}>
                        <path d="M78.11667,15.05c-32.96667,3.58333 -59.48333,30.1 -63.06667,62.35c-3.58333,33.68333 15.76667,63.78333 45.15,75.25c2.15,0.71667 4.3,-0.71667 4.3,-3.58333v-11.46667c0,0 -2.86667,0.71667 -6.45,0.71667c-10.03333,0 -14.33333,-8.6 -15.05,-13.61667c-0.71667,-2.86667 -2.15,-5.01667 -4.3,-7.16667c-2.15,-0.71667 -2.86667,-0.71667 -2.86667,-1.43333c0,-1.43333 2.15,-1.43333 2.86667,-1.43333c4.3,0 7.88333,5.01667 9.31667,7.16667c3.58333,5.73333 7.88333,7.16667 10.03333,7.16667c2.86667,0 5.01667,-0.71667 6.45,-1.43333c0.71667,-5.01667 2.86667,-10.03333 7.16667,-12.9c-16.48333,-3.58333 -28.66667,-12.9 -28.66667,-28.66667c0,-7.88333 3.58333,-15.76667 8.6,-21.5c-0.71667,-1.43333 -1.43333,-5.01667 -1.43333,-10.03333c0,-2.86667 0,-7.16667 2.15,-11.46667c0,0 10.03333,0 20.06667,9.31667c3.58333,-1.43333 8.6,-2.15 13.61667,-2.15c5.01667,0 10.03333,0.71667 14.33333,2.15c9.31667,-9.31667 20.06667,-9.31667 20.06667,-9.31667c1.43333,4.3 1.43333,8.6 1.43333,11.46667c0,5.73333 -0.71667,8.6 -1.43333,10.03333c5.01667,5.73333 8.6,12.9 8.6,21.5c0,15.76667 -12.18333,25.08333 -28.66667,28.66667c4.3,3.58333 7.16667,10.03333 7.16667,16.48333v18.63333c0,2.15 2.15,4.3 5.01667,3.58333c26.51667,-10.75 45.15,-36.55 45.15,-66.65c0,-43 -36.55,-76.68333 -79.55,-71.66667z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li style={project.toolLIMargin}>
                <a
                  href={project.projectLink}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 172 172"
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <g fill={iconColor.color2}>
                        <path d="M143.33333,43h-57.33333l-14.33333,-14.33333h-43c-7.88333,0 -14.33333,6.45 -14.33333,14.33333v86c0,7.88333 6.45,14.33333 14.33333,14.33333h114.66667c7.88333,0 14.33333,-6.45 14.33333,-14.33333v-71.66667c0,-7.88333 -6.45,-14.33333 -14.33333,-14.33333zM143.33333,129h-114.66667v-71.66667h114.66667z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  });
};

export default FeaturedProject;
