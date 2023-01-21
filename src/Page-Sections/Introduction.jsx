import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Introduction.module.scss";

import Crest from "../Assets/Images/Crest.png";

const Indroduction = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <div className={Styles.About_Container}>
          <p className={Styles.Brand}>Hopewell Highschool</p>
          <p className={Styles.Description}>
            We strive to create and maintain an environment conducive to the
            intellectual, moral, spiritual, social and cultural development of
            learners: Thus equipping them with skills, values and attitudes
            necessary for them to function at their fullest potential in
            society.
          </p>

          <Link to={"/About"}>
            <button className={Styles.Read_More_Button}>Learn More</button>
          </Link>
        </div>
        <div className={Styles.Image_Container}>
          <img src={Crest} alt="" className={Styles.Image} />
        </div>
      </div>
    </div>
  );
};

export default Indroduction;
