import React, { useState } from "react";
import Styles from "../Styles/Page-Section-Styles/Tour.module.scss";

import TourData from "../Data/Tour.json";

const Tour = () => {
  const [data, setData] = useState(TourData);
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title_Container}>
        <p className={Styles.Question}>- Walkaround</p>
        <p className={Styles.Section_Title}>Take A Tour</p>
      </div>

      <div className={Styles.Content_Container}>
        {data?.slice(0, 3).map((value) => {
            return (
              <a
                href={value.Link}
                rel={"noreferrer"}
                target={"_blank"}
                key={value.id}
              >
                <div className={Styles.Card}>
                  <div className={Styles.Preview_Container}>
                    <img
                      src={value.Preview}
                      alt=""
                      className={Styles.Preview}
                    />
                    <p className={Styles.Title}>{value.Title}</p>
                  </div>

                  <div className={Styles.Description_Container}>
                    <p className={Styles.Description}>{value.Description}</p>
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Tour;
