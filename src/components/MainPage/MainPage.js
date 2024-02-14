import React, {useEffect} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageGallery3D from '../3d';
import blob1 from "../../image/Clay_White0001.png"

function MainPage() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="mainpage" id="mainpage">
      <div className="mainpage-header">
        <div className="mainpage-header-moving" data-aos={"fade-in"} data-aos-duration={"2500"}>
          <Typewriter
            options={{
              strings: ["Hello,", "नमस्ते,", "Hola,"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <span data-aos={"fade-out"} data-aos-duration={"3000"}>I'm Abhishek Pragada</span>
      </div>
      <div className="mainpage-body">
        <div className="mainpage-image">
        </div>
        <span>
          I am a full stack developer, currently working at 
          <a className="mainpage-body-link" href="https://www.nimblework.com/"> NimbleWork</a>.
          <br/> Crafting web solutions that blend front-end finesse with back-end expertise for exceptional user experiences.
        </span>
      </div>
      <div className="blob1"/>
      <div className="blob2"/>
    </div>
  );
}

export default MainPage;
