import React, {useEffect} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

const pages = [
  {
    pageName: "About Me",
    pageLink: "about-me",
  },{
    pageName: "Projects",
    pageLink: "projects",
  },{
    pageName: "Contact Me",
    pageLink: "contact-me",
  }
];

function MainPage() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="mainpage" id="mainpage">
      <div className="navbar" data-aos={"example-anim2"} data-aos-anchor={"#about-me"} data-aos-anchor-placement={"top-top"}>
        <div className="navbar-logo" data-aos={"fade-down"} data-aos-duration={"1500"}>
          <Link
          activeClass="active"
          to="mainpage"
          spy={true}
          smooth={true}
          duration={1000}
          >
            ABHISHEK
          </Link>
        </div>
        <div className="navbar-items">
          {pages.map((page,i) => (
            <div className="navbar-item">
              <button data-aos={"zoom-in"} data-aos-easing={"ease-in-sine"} data-aos-duration={"1500"}>
              <Link
              activeClass="active"
              to={page.pageLink}
              spy={true}
              smooth={true}
              duration={1000}
              >
                <span data-aos={"example-anim3"} data-aos-anchor={"#about-me"} data-aos-anchor-placement={"top-top"}>{page.pageName}</span>
              </Link>
              </button>
            </div>
          ))}
          <div className="navbar-button" data-aos={"example-anim4"} data-aos-anchor={"#about-me"} data-aos-anchor-placement={"top-top"}>
            <a
              href="https://drive.google.com/file/d/1Eby66Lhw9Kc6YkPsEM7xnqyR06iM6O76/view?usp=sharing"
              target="_blank"
            >
              <button className="navbar-button-custom" data-aos={"fade-left"} data-aos-easing={"ease-in-sine"} data-aos-duration={"1500"}>
                  <span>Resume</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="mainpage-header">
        <div className="mainpage-header-moving" data-aos={"fade-in"} data-aos-duration={"2500"}>
          <Typewriter
            options={{
              strings: ["Hello", "नमस्ते", "Hola"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <span data-aos={"fade-out"} data-aos-duration={"3000"}>I am Abhishek Pragada</span>
      </div>
    </div>
  );
}

export default MainPage;
