import React from "react";
import Styles from "../Styles/Page-Styles/Home.module.scss";

import Hero from "../Page-Sections/Hero";
import Indroduction from "../Page-Sections/Introduction";
import Offer from "../Page-Sections/Offer";
import Tour from "../Page-Sections/Tour";
import UpdateSection from "../Page-Sections/UpdateSection";
import StaffSection from "../Page-Sections/StaffSection";
import Sponsors from "../Page-Sections/Sponsors";
import Contact from "../Page-Sections/Contact";
import Map from "../Page-Sections/Map";

const Home = () => {
  return (
    <div className={Styles.Page}>
      <Hero />
      <Indroduction />
      <Offer />
      <Tour />
      <UpdateSection />
      <StaffSection />
      <Sponsors />
      <Contact />
      <Map />
    </div>
  );
};

export default Home;
