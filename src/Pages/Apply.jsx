import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import Styles from "../Styles/Page-Styles/About.module.scss";

import PageHead from "../Components/Main/PageHead";

const Apply = () => {
  TabTitle("HHS | About");
  return <div className={Styles.Page}>
    <PageHead Title={"Apply"} />
  </div>;
};

export default Apply;
