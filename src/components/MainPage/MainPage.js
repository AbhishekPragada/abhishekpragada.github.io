import React from "react";
import Typewriter from "typewriter-effect";

const pages = ["About Me", "Projects", "Contact Me"];

function MainPage() {
  return (
    <div className="mainpage">
      <div className="navbar">
        <div className="navbar-logo">ABHISHEK</div>
        <div className="navbar-items">
          {pages.map((page) => (
            <div className="navbar-item">
              <button className="navbar-button">
                <span>{page}</span>
              </button>
            </div>
          ))}
          <div className="abc">
            <button className="navbar-button-custom">
              <a
                href="https://drive.google.com/file/d/1Eby66Lhw9Kc6YkPsEM7xnqyR06iM6O76/view?usp=sharing"
                target="_blank"
              >
                <span>Resume</span>
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="mainpage-header">
        <div className="mainpage-header-moving">
          <Typewriter
            options={{
              strings: ["Hello", "नमस्ते", "Hola"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <span>I am Abhishek Pragada</span>
      </div>
    </div>
  );
}

export default MainPage;
