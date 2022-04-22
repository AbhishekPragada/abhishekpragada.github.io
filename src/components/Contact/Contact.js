import React, { useState } from "react";

export default function Contact() {
  const [iconColor, setIconColor] = useState({
    color1: "#8892b0",
    color2: "#8892b0",
    color3: "#8892b0",
    color4: "#8892b0",
  });

  return (
    <div className="contact-bar">
      <ul className="contact-list">
        <li className="contact-item">
          <a
            className="contact-a"
            href="https://github.com/AbhishekPragada"
            target="_blank"
            onMouseEnter={() => {
              setIconColor((prevalue) => {
                return { ...prevalue, color3: "#64ffda" };
              });
            }}
            onMouseLeave={() => {
              setIconColor((prevalue) => {
                return { ...prevalue, color3: "#8892b0" };
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 172 172"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill={iconColor.color3}>
                  <path d="M78.11667,15.05c-32.96667,3.58333 -59.48333,30.1 -63.06667,62.35c-3.58333,33.68333 15.76667,63.78333 45.15,75.25c2.15,0.71667 4.3,-0.71667 4.3,-3.58333v-11.46667c0,0 -2.86667,0.71667 -6.45,0.71667c-10.03333,0 -14.33333,-8.6 -15.05,-13.61667c-0.71667,-2.86667 -2.15,-5.01667 -4.3,-7.16667c-2.15,-0.71667 -2.86667,-0.71667 -2.86667,-1.43333c0,-1.43333 2.15,-1.43333 2.86667,-1.43333c4.3,0 7.88333,5.01667 9.31667,7.16667c3.58333,5.73333 7.88333,7.16667 10.03333,7.16667c2.86667,0 5.01667,-0.71667 6.45,-1.43333c0.71667,-5.01667 2.86667,-10.03333 7.16667,-12.9c-16.48333,-3.58333 -28.66667,-12.9 -28.66667,-28.66667c0,-7.88333 3.58333,-15.76667 8.6,-21.5c-0.71667,-1.43333 -1.43333,-5.01667 -1.43333,-10.03333c0,-2.86667 0,-7.16667 2.15,-11.46667c0,0 10.03333,0 20.06667,9.31667c3.58333,-1.43333 8.6,-2.15 13.61667,-2.15c5.01667,0 10.03333,0.71667 14.33333,2.15c9.31667,-9.31667 20.06667,-9.31667 20.06667,-9.31667c1.43333,4.3 1.43333,8.6 1.43333,11.46667c0,5.73333 -0.71667,8.6 -1.43333,10.03333c5.01667,5.73333 8.6,12.9 8.6,21.5c0,15.76667 -12.18333,25.08333 -28.66667,28.66667c4.3,3.58333 7.16667,10.03333 7.16667,16.48333v18.63333c0,2.15 2.15,4.3 5.01667,3.58333c26.51667,-10.75 45.15,-36.55 45.15,-66.65c0,-43 -36.55,-76.68333 -79.55,-71.66667z"></path>
                </g>
              </g>
            </svg>
          </a>
        </li>
        <li className="contact-item">
          <a
            className="contact-a"
            href="https://www.instagram.com/abhishek_130101/"
            targte="_blank"
            onMouseEnter={() => {
              setIconColor((prevalue) => {
                return { ...prevalue, color2: "#64ffda" };
              });
            }}
            onMouseLeave={() => {
              setIconColor((prevalue) => {
                return { ...prevalue, color2: "#8892b0" };
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 172 172"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill={iconColor.color2}>
                  <path d="M57.33333,21.5c-19.7585,0 -35.83333,16.07483 -35.83333,35.83333v57.33333c0,19.7585 16.07483,35.83333 35.83333,35.83333h57.33333c19.7585,0 35.83333,-16.07483 35.83333,-35.83333v-57.33333c0,-19.7585 -16.07483,-35.83333 -35.83333,-35.83333zM57.33333,35.83333h57.33333c11.85367,0 21.5,9.64633 21.5,21.5v57.33333c0,11.85367 -9.64633,21.5 -21.5,21.5h-57.33333c-11.85367,0 -21.5,-9.64633 -21.5,-21.5v-57.33333c0,-11.85367 9.64633,-21.5 21.5,-21.5zM121.83333,43c-3.95804,0 -7.16667,3.20863 -7.16667,7.16667c0,3.95804 3.20863,7.16667 7.16667,7.16667c3.95804,0 7.16667,-3.20863 7.16667,-7.16667c0,-3.95804 -3.20863,-7.16667 -7.16667,-7.16667zM86,50.16667c-19.7585,0 -35.83333,16.07483 -35.83333,35.83333c0,19.7585 16.07483,35.83333 35.83333,35.83333c19.7585,0 35.83333,-16.07483 35.83333,-35.83333c0,-19.7585 -16.07483,-35.83333 -35.83333,-35.83333zM86,64.5c11.85367,0 21.5,9.64633 21.5,21.5c0,11.85367 -9.64633,21.5 -21.5,21.5c-11.85367,0 -21.5,-9.64633 -21.5,-21.5c0,-11.85367 9.64633,-21.5 21.5,-21.5z"></path>
                </g>
              </g>
            </svg>
          </a>
        </li>
        <li className="contact-item">
          <a
            className="contact-a"
            href="https://www.linkedin.com/in/abhishek-pragada/"
            target="_blank"
            onMouseEnter={() => {
              setIconColor((prevalue) => {
                return { ...prevalue, color4: "#64ffda" };
              });
            }}
            onMouseLeave={() => {
              setIconColor((prevalue) => {
                return { ...prevalue, color4: "#8892b0" };
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 172 172"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill={iconColor.color4}>
                  <path d="M35.83333,21.5c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v100.33333c0,7.91917 6.41417,14.33333 14.33333,14.33333h100.33333c7.91917,0 14.33333,-6.41417 14.33333,-14.33333v-100.33333c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM35.83333,35.83333h100.33333v100.33333h-100.33333zM55.75163,45.26758c-6.14183,0 -9.82617,3.69207 -9.82617,8.6084c0,4.91633 3.68479,8.5944 9.21029,8.5944c6.14183,0 9.82617,-3.67807 9.82617,-8.5944c0,-4.91633 -3.68479,-8.6084 -9.21029,-8.6084zM46.41536,71.66667v50.16667h18.08464v-50.16667zM79.42122,71.66667v50.16667h18.08464v-27.4209c0,-8.16283 5.82392,-9.33626 7.57259,-9.33626c1.74867,0 6.42481,1.75393 6.42481,9.33626v27.4209h17.49674v-27.4209c0,-15.74517 -6.99657,-22.74577 -15.74707,-22.74577c-8.7505,0 -13.4179,2.91369 -15.74707,6.99869v-6.99869z"></path>
                </g>
              </g>
            </svg>
          </a>
        </li>
        <li className="contact-item">
          <a
            className="contact-a"
            href="www.facebook.com"
            target="_blank"
            onMouseEnter={() => {
              setIconColor((prevalue) => {
                return { ...prevalue, color1: "#64ffda" };
              });
            }}
            onMouseLeave={() => {
              setIconColor((prevalue) => {
                return { ...prevalue, color1: "#8892b0" };
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 172 172"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill={iconColor.color1}>
                  <path d="M86,14.33333c-39.49552,0 -71.66667,32.17115 -71.66667,71.66667c0,39.49552 32.17115,71.66667 71.66667,71.66667c39.49552,0 71.66667,-32.17115 71.66667,-71.66667c0,-39.49552 -32.17115,-71.66667 -71.66667,-71.66667zM86,28.66667c31.74921,0 57.33333,25.58412 57.33333,57.33333c0,28.77035 -21.03186,52.40996 -48.59896,56.60547v-39.51465h16.6849l2.61751,-16.95085h-19.30241v-9.26628c0,-7.04483 2.29501,-13.29752 8.88834,-13.29752h10.58203v-14.79525c-1.86333,-0.25083 -5.7957,-0.79785 -13.22754,-0.79785c-15.523,0 -24.62142,8.19867 -24.62142,26.875v11.2819h-15.95703v16.95085h15.95703v39.37467c-27.11871,-4.57277 -47.68913,-28.01213 -47.68913,-56.46549c0,-31.74921 25.58412,-57.33333 57.33333,-57.33333z"></path>
                </g>
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}
