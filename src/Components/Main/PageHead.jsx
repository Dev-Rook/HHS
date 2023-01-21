import React from "react";
import Styles from "../../Styles/Components-Styles/PageHead.module.scss";

const PageHead = ({ Image, Title }) => {
  return (
    <div className={Styles.PageHead}>
      <div className={Styles.Page_Title}>{Title}</div>
      <div className={Styles.Diffuser}></div>
      <img src={Image} alt="" className={Styles.Heade_Image} />
    </div>
  );
};

export default PageHead;
