
import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/Curricula.module.scss";

import PageHead from "../Components/Main/PageHead";
import Curriculas from "../Page-Sections/Curriculas";


const Curricula = () => {
  TabTitle("HHS | Curriculums");
  return (
    <div className={Styles.Page}>
      <PageHead />
      <Curriculas />
    </div>
  );
};

export default Curricula;