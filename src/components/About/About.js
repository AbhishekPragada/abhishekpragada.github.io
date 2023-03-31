import React, {useEffect} from "react";
import Progress from "./Progress";
import hi from "../../image.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const about = {
    image: "abhishek",
    name: "Abhishek Pragada",
    description:
      "I am currently working as a SDE at Nimble Work (formerly known as Digite). At the company I mainly work on a product management tool called Nimble, my role would be in helping to add new enhancements and features. I have completed my graduation at IIIT Naya Raipur in Electronics and Communication Engineering.",
  };

  const skills = [
    {
      skillName: "JS",
      skillPercent: "80%",
    },
    {
      skillName: "React",
      skillPercent: "80%",
    },
    {
      skillName: "Java",
      skillPercent: "60%",
    },
    {
      skillName: "HTML+CSS",
      skillPercent: "80%",
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

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="about" id="about-me">
      <div className="about-head" data-aos={"fade-down"} data-aos-duration={"1000"} data-aos-once={true}>About Me</div>
      <div className="about-content">
        <div className="about-cards">
          <div className="card-description">
            <p>
              Hi, My name is Abhishek Pragada. I am currently working as a SDE at Digite. At the company I mainly work on a product management tool called Nimble,
              my role would be in helping the team in addition of new enhancements and features. Also I have completed my graduation at IIIT Naya Raipur in Electronics and Communication Engineering. 
              I like to bring my ideas to life by brainstorming and ideating them during implementation
            </p>
            <p>
              Although being a student of Electronics, my interests are
              profoundly bound to software and web development areas.
            </p>
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
          <img src={hi} height="90%" width="100%" />
        </div>
      </div>
    </div>
  );
}

export default About;
