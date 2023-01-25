import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useScrollUp } from "../Hooks/useScrollUp";
import Styles from "../../Styles/Components-Styles/Navbar.module.scss";

import Crest from "../../Assets/Images/Crest.png";

import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";

import Hamburger from "hamburger-react";
import ListGroup from "react-bootstrap/ListGroup";

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
    <nav className={Styles.Navbar}>
      <div className={Styles.Left_Side}>
        <img src={Crest} alt="" className={Styles.Logo} />

        {/* <p className={Styles.Slogan}>HHS |</p> */}

        <div className={Styles.Navlink_Container}>
          <Link to={"/"} onClick={scrollUp} className={Styles.Navlink}>
            Home
          </Link>
          <Link to={"/About"} onClick={scrollUp} className={Styles.Navlink}>
            About
          </Link>
          <Link to={"/Curriculas"} onClick={scrollUp} className={Styles.Navlink}>
            Curriculas
          </Link>
          <Link to={"/Documents"} onClick={scrollUp} className={Styles.Navlink}>
            Documents
          </Link>
          <Link to={"/Updates"} onClick={scrollUp} className={Styles.Navlink}>
            Updates
          </Link>
          <Link to={"/Apply"} onClick={scrollUp} className={Styles.Navlink}>
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
        |{/* <BrightnessMediumIcon /> */}
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

      {/* Mobile Menu Start  */}
      <div className={`${Styles.Mobile_Menu} ${menu ? Styles.Reveal : ""}`}>
        <ListGroup className={Styles.ListGroup}>
          <Link onClick={doubleFunction} className={Styles.Navlink} to={"/"}>
            <ListGroup.Item className={Styles.ListGroupItem}>
              Home
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"/About"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              About
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"/Curriculas"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              Curriculums
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"/Documents"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              Documents
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"/Updates"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              Updates
            </ListGroup.Item>
          </Link>

          <a href={`Dog Water`} target={"_blank"} rel={"noreferrer"}>
            <ListGroup.Item className={Styles.ListGroupItem}>
              Grades
            </ListGroup.Item>
          </a>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"/Apply"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              Apply
            </ListGroup.Item>
          </Link>
        </ListGroup>

        <div className={Styles.Contact_Information_Box}>
          <div className={Styles.Contact_item}>
            <p className={Styles.Title}>School</p>
            <p className={Styles.Text}>221 B Baker Street</p>
          </div>
          <div className={Styles.Contact_item}>
            <p className={Styles.Title}>Contact</p>
            <p className={Styles.Text}>1 876 192 1680</p>
            <p className={Styles.Text}>hhs@gmail.com</p>
          </div>
          <div className={Styles.Contact_item}>
            <p className={Styles.Title}>Social Media</p>
            <p className={Styles.Text}>221 B Baker Street</p>
          </div>
        </div>
      </div>
      {/* Mobile Menu End */}
    </nav>
  );
};

export default Navbar;
