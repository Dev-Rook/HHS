import React from "react";
import Styles from "../Styles/Page-Section-Styles/Hero.module.scss";

const Video = "Dog Water";
const Image = "Dog Water";

const Hero = () => {
  return (
    <div className={Styles.Section}>
      <img src={Image} alt="" className={Styles.Image} />
      <video src={Video} className={Styles.Video}></video>
    </div>
  );
};

export default Hero;
