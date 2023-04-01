import React, {useEffect} from "react";
import Progress from "./Progress";
import avatar from "../../avatar.jpeg";
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
      skillPercent: "85%",
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
      skillPercent: "90%",
    },
    {
      skillName: "SQL",
      skillPercent: "55%",
    },
    {
      skillName: "Type Script",
      skillPercent: "65%",
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
              Hi, My name is Abhishek Pragada. I am currently working as a SDE at Nimble Work (formerly knows as Digite) and a graduate from IIIT Naya Raipur. I specialize in creating beautiful and functional user interfaces that provide an exceptional user experience.
              I have a deep understanding of front end technologies and have worked a bit on backend.
              <p>I am constantly learning and staying up-to-date with the latest advancements in the industry. I have 
              worked on a wide range of projects, from small websites to large-scale web applications. I am excited about the future of front end development and am always looking for new challenges and opportunities to learn and grow.
              </p>
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
          <img src={avatar} height="300px" width="400px" />
        </div>
      </div>
    </div>
  );
}

export default About;
