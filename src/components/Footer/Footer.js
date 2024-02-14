import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer(){

    useEffect(() => {
        AOS.init({once: true});
        AOS.refresh();
      }, []);

    return(
        <React.Fragment>
            <div className="contact-me" id="contact-me">
                <div className="contact-content">
                    <p>
                    LET’S BUILD SOMETHING TOGETHER
                    </p>
                    <p class="contact-mail">abhi.venkata54@gmail.com</p>
                    <button className="contact-button" > 
                        {/* data-aos={"zoom-in"} data-aos-duration={"1000"} */}
                        <a href="mailto:abhi.venkata54@gmail.com">
                            Get In Touch
                        </a>
                    </button>
                </div>
            </div>
            <div className="footer">
                <p>Abhishek Pragada &#169; 2021</p>
            </div>
        </React.Fragment>
    )
}

export default Footer;