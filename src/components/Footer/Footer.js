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
                    <span className="footer-title">Let’s Connect</span>
                    <span className="footer-span">Open to collaborations, opportunities, and cool ideas.</span>
                    {/* <p class="contact-mail">abhi.venkata54@gmail.com</p> */}
                    <button className="contact-button" >
                        <a href="mailto:abhi.venkata54@gmail.com">
                            Get In Touch
                        </a>
                    </button>
                </div>
                <div className="footer-divider"></div>
                <div className="footer">
                    <p>Abhishek Pragada &#169; 2021</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;