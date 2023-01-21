import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Styles from "../Styles/Page-Section-Styles/UpdateSection.module.scss";


const UpdateSection = () => {
  const url = `https://hhs-backen-76xny.ondigitalocean.app/events`;
  const { data, error, loading } = useAxios(url);

  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title_Container}>
        <p className={Styles.Question}>- Updates</p>
        <p className={Styles.Section_Title}>Latest School Updates</p>
      </div>
      <div className={Styles.Content_Container}>
        {data &&
          data.map((value) => {
            return (
              <Link to={"/Update/" + value.id} key={value.id}>
                <div className={Styles.Update_Card}>
                  <div className={Styles.Image_Container}>
                    {value?.image?.url ? (
                      <img
                        src={`https://hhs-backen-76xny.ondigitalocean.app${value?.image?.url}`}
                        alt=""
                        className={Styles.Image}
                      />
                    ) : null}
                  </div>
                  <div className={Styles.Information_Box}>
                    <p className={Styles.Text}>{value?.date}</p>
                    <p className={Styles.Tite}>{value?.title}</p>
      
                  </div>
                </div>
              </Link>
            );
          })}
      </div>

      <Link className={Styles.Link} to={"Updates"}>
        <button className={Styles.View_More_Button}>View All</button>
      </Link>
    </div>
  );
};

export default UpdateSection;