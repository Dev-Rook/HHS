import React from "react";
import { Link } from "react-router-dom";
import Styles from "../../Styles/Components-Styles/Footer.module.scss";

const Footer = (scrollUp) => {
  return (
    <div className={Styles.Footer}>
      <div className={Styles.Information_Section}>
        <div className={Styles.About_Box}>
          <p className={Styles.Title}>Hopewell High School</p>

          <p className={Styles.About}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            impedit nostrum! Natus ducimus in tempore reiciendis explicabo
            blanditiis perferendis animi.
          </p>
        </div>

        <div className={Styles.Information_Box}>
          <div className={Styles.Info_Column}>
            <p className={Styles.Column_Tile}>Find Us On</p>

            <p className={Styles.Text}>Twitter</p>
            <p className={Styles.Text}>instagram</p>
          </div>
          <div className={Styles.Info_Column}>
            <p className={Styles.Column_Tile}>Contact Us</p>

            <p className={Styles.Text}>1 876 192 1680</p>
            <p className={Styles.Text}>hopewellhigh@gmail.com</p>
          </div>
          <div className={Styles.Info_Column}>
            <p className={Styles.Column_Tile}>Address</p>

            <p className={Styles.Text}>221 B Bakers Street</p>
            <p className={Styles.Text}>Info Column Content</p>
          </div>
        </div>
      </div>

      <div className={Styles.Map_Container}></div>

      <ul className={Styles.Navlink_Container}>
        <li>
          <Link to={"/"} className={Styles.Navlink} onClick={scrollUp}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"About"} className={Styles.Navlink} onClick={scrollUp}>
            About
          </Link>
        </li>
        <li>
          <Link to={"Curricula"} className={Styles.Navlink} onClick={scrollUp}>
            Curriculums
          </Link>
        </li>
        <li>
          <Link to={"Updates"} className={Styles.Navlink} onClick={scrollUp}>
            Updates
          </Link>
        </li>
        <li>
          <Link to={"Documents"} className={Styles.Navlink} onClick={scrollUp}>
            Documents
          </Link>
        </li>
        <li>
          <Link to={"Apply"} className={Styles.Navlink} onClick={scrollUp}>
            Apply
          </Link>
        </li>
      </ul>

      <p className={Styles.Copyright_Tag}>© 2023 Hopewell High</p>
    </div>
  );
};

export default Footer;
