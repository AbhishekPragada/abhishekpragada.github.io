import React  from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../slice';
import logoLight from '../../image/logoLight.png';
import logoDark  from '../../image/logoDark.png';

const Navbar = () => {

    const pages = [
        {
        pageName: "About",
        pageLink: "mainpage",
        },{
        pageName: "Projects",
        pageLink: "projects",
        },{
        pageName: "Blogs",
        pageLink: "https://medium.com/@abhi.venkata54"
        }, {
        pageName: "Resume",
        pageLink: "https://drive.google.com/file/d/1CDP_Ze2ctK408Wlpg5ANtP16dj_N06Oe/view?usp=sharing"
        }
    ];

    const isDarkMode = useSelector(state => state.isDarkMode);
    const dispatch = useDispatch();

    const onThemeClick = () => {
      dispatch(toggleDarkMode());
      document.documentElement.classList.toggle('dark-mode', !isDarkMode);
    }
 
    return(
        <div className="navbar" data-aos={"example-anim2"} data-aos-anchor={"#mainpage"} data-aos-anchor-placement={"top-top"}>
        <div className="navbar-logo" data-aos={"fade-down"} data-aos-duration={"1500"}>
          <Link
          activeClass="active"
          to="mainpage"
          spy={true}
          smooth={true}
          duration={1000}
          >
            <img src={isDarkMode ? logoDark : logoLight}></img>
          </Link>
        </div>
        <div className="navbar-items">
          {pages.map((page) => ( //TODO:Remove the loop spread it out
            <div className="navbar-item" key={page.pageLink}>
              <button className={`navitem-${page.pageName}`} data-aos={"zoom-in"} data-aos-easing={"ease-in-sine"} data-aos-duration={"1500"}>
              {(page.pageName === "Blogs" || page.pageName === "Resume") ? 
              <a href={page.pageLink} target="_blank" rel="noreferrer">{page.pageName}</a> 
              :  <Link
              activeClass="active"
              to={page.pageLink}
              spy={true}
              smooth={true}
              duration={800}
              >
                <a data-aos-anchor={`#${page.pageLink}`} data-aos-anchor-placement={"top-top"}>{page.pageName}</a>
              </Link>
            }
              </button>
            </div> 
          ))} 
          <div className="navbar-mode" onClick={onThemeClick}>
            {isDarkMode ? <LightModeIcon/> : <DarkModeIcon/>} 
          </div>
        </div>
      </div>
    )
}

export default Navbar;