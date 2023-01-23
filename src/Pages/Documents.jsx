import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import PageHead from "../Components/Main/PageHead";
import Styles from "../Styles/Page-Styles/Documents.module.scss";

import DocumentGrid from "../Components/Secondary/DocumentGrid";

const Documents = () => {
  TabTitle("HHS | Documents")
  return (
    <div className={Styles.Page}>
      <PageHead Title={"Douments"} />
      <DocumentGrid />
    </div>
  )
}

export default Documents