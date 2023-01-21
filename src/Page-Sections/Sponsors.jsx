import React, { useState } from "react";
import Styles from "../Styles/Page-Section-Styles/Sponsors.module.scss";

import SponsorData from "../Data/Sponsors.json";

import Crest from "../Assets/Images/Crest.png";

const Sponsors = () => {
  const [data, setData] = useState(SponsorData);
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title_Container}>
        <p className={Styles.Question}>- Sponsors</p>
        <p className={Styles.Section_Title}>Our Sponsors & Trusted Partners</p>
      </div>

      <div className={Styles.Sponsor_Grid}>
        {data?.map((value) => {
          return (
            <a
              href={`https://`}
              rel={"noreferrer"}
              target={"_blank"}
              key={value.id}
            >
              <div className={Styles.Card}>
                <img src={Crest} alt="Icon" className={Styles.Icon} />
                <p className={Styles.Title}>{value.Title}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sponsors;
