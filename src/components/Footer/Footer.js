import React from "react";

function Footer(){
    return(
        <React.Fragment>
            <div className="contact-me">
                <h1>Contact Me</h1>
                <div className="contact-content">
                    <p>
                        Although I am working as of now I am open to other offers <br/>and happy to help with any queries
                    </p>
                    <p class="contact-mail">Reach me : abhi.venkata54@gmail.com</p>
                    <button className="contact-button">
                        Get In Touch
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