
import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Curricula.module.scss";

import PageHead from "../Components/Main/PageHead";
import Skills from "../Page-Sections/Skills";
import Subjects from "../Page-Sections/Subjects";


const Curricula = () => {
  TabTitle("HHS | Curriculums");
  return (
    <div className={Styles.Page}>
      <PageHead />
      <Subjects />
      <Skills />
    </div>
  );
};

export default Curricula;