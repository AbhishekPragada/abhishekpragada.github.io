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
                <h1 data-aos={"fade-down"} data-aos-duration={"1000"}>Contact Me</h1>
                <div className="contact-content">
                    <p>
                    Although I’m not currently looking for any new opportunities, my inbox is<br/>always open. Whether you have a question or just want to say hi, I’ll try my <br/>best to get back to you!
                    </p>
                    <p class="contact-mail">Reach me : abhi.venkata54@gmail.com</p>
                    <button className="contact-button" data-aos={"zoom-in"} data-aos-duration={"1000"}>
                        <a href="mailto:abhi.venkata54@gmail.com">
                            Get In Touch
                        </a>
                    </button>
                </div>
            </div>
            <div className="footer">   
                <p>Abhishek Pragada &#169; 2022</p>
            </div>
        </React.Fragment>
    )
}

export default Footer;