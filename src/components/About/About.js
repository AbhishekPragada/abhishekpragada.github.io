import React from "react";
import Progress from "./Progress";
import hi from "../../image.jpg";

function About() {
  const about = {
    image: "abhishek",
    name: "Abhishek Pragada",
    description:
      "I'm a full stack developer currently pursuing my B.Tech in Electronics and Communication Engineering from IIT Naya Raipur and working at Digite as a full stack intern",
  };

  const skills = [
    {
      skillName: "HTML+CSS",
      skillPercent: "80%",
    },
    {
      skillName: "JS",
      skillPercent: "80%",
    },
    {
      skillName: "Java",
      skillPercent: "60%",
    },
    {
      skillName: "React",
      skillPercent: "70%",
    },
    {
      skillName: "Node",
      skillPercent: "70%",
    },
    {
      skillName: "Mongo DB",
      skillPercent: "50%",
    },
  ];

  return (
    <div className="about">
      <div className="about-head">About Me</div>
      <div className="about-content">
        <div className="about-cards">
          <div className="card-description">
            <p>
              Hi, My name is Abhishek Pragada. I am currently pursuing my
              undergrad in Electronics and Communications Engineering at IIIT
              Naya Raipur. Also, as of now I am operating as a full stack intern
              at Digite. I like to bring my ideas to life by brainstorming and
              ideating them during implementation
            </p>
            <p>
              Although being a student of Electronics, my interests are
              profoundly bound to software and web development areas.
            </p>
            <p></p>
            <p></p>
            <p></p>
          </div>

          <div className="about-skills">
            <span className="about-skills-head">Skills</span>
            <div className="about-skills-content">
              {skills.map((skill, index) => {
                var styles = { width: `${skill.skillPercent}` }
                return (
                  <Progress skillName={skill.skillName} styles={styles}></Progress>
                );
              })}
            </div>  
          </div>
          
        </div>
        <div className="about-image">
          <img src={hi} height="100%" width="100%" />
        </div>
      </div>
    </div>
  );
}

export default About;
