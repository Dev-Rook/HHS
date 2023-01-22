import React from "react";
import Styles from "../Styles/Page-Styles/About.module.scss";

import { TabTitle } from "../Utilities/TabTitle";


import TimeLineContainer from "../Page-Sections/TimelineContainer";
import Tour from "../Page-Sections/Tour";
import StaffSection from "../Page-Sections/StaffSection";
import Sponsors from "../Page-Sections/Sponsors";

import Crest from "../Assets/Images/Crest.png";

const About = () => {
  TabTitle("HHS | About");
  return (
    <div className={Styles.Page}>
      <div className={Styles.Section}>
        <div className={Styles.Content_Container}>
          <div className={Styles.About_Container}>
            <p className={Styles.Question}>- Who We Are</p>
            <p className={Styles.Brand}>Hopewell Highschool</p>
            <p className={Styles.Description}>
              We strive to create and maintain an environment conducive to the
              intellectual, moral, spiritual, social and cultural development of
              learners: Thus equipping them with skills, values and attitudes
              necessary for them to function at their fullest potential in
              society.
            </p>
          </div>
          <div className={Styles.Image_Container}>
            <img src={Crest} alt="" className={Styles.Image} />
          </div>
        </div>
      </div>

      <TimeLineContainer />
      <Tour />
      <StaffSection />
      <Sponsors />
    </div>
  );
};

export default About;
