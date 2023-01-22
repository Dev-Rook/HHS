import React, {useState} from "react";
import { Link } from "react-router-dom";
import Styles from "../../Styles/Components-Styles/Navbar.module.scss";

import Crest from "../../Assets/Images/Crest.png";

import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";

import Hamburger from "hamburger-react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const showMenu = () => {
    setMenu((prev) => !prev);
    console.log("Working menu");
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const doubleFunction = () => {
    showMenu();
    scrollUp();
    handleClick();
  };

  return (
    <div className={Styles.Navbar}>
      <div className={Styles.Left_Side}>
        <img src={Crest} alt="" className={Styles.Logo} />

        {/* <p className={Styles.Slogan}>HHS |</p> */}

        <div className={Styles.Navlink_Container}>
          <Link to={"/"} onClick={scrollUp} className={Styles.Navlink}>
            Home
          </Link>
          <Link to={"About"} onClick={scrollUp} className={Styles.Navlink}>
            About
          </Link>
          <Link to={"Curriculas"} onClick={scrollUp} className={Styles.Navlink}>
            Curriculas
          </Link>
          <Link to={"Documents"} onClick={scrollUp} className={Styles.Navlink}>
            Documents
          </Link>
          <Link to={"Updates"} onClick={scrollUp} className={Styles.Navlink}>
            Updates
          </Link>
          <Link to={"Apply"} onClick={scrollUp} className={Styles.Navlink}>
            Apply
          </Link>
        </div>
      </div>

      <div className={Styles.Right_Side}>
        <div className={Styles.Social_Icon_Tray}>
          <TwitterIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
        |
        <BrightnessMediumIcon />
        <span className={Styles.Span}>
          <Hamburger
            className={Styles.HamburgerMenu}
            onToggle={setMenu}
            direction="right"
            color="white"
            duration={0.5}
            size={35}
          />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
