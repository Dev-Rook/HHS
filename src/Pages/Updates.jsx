import React, {useEffect, useState} from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Styles/Updates.module.scss";

import PageHead from "../Components/Main/PageHead";
import useAxios from "../Hooks/useAxios";

const Updates = () => {
  TabTitle("HHS | Updates");

  const url = `https://hhs-backen-76xny.ondigitalocean.app/events`;
  const { data, error, loading } = useAxios(url);

  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={Styles.Page}>
      <PageHead Title={"Updates"} />

      <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        {data?.map((value) => {
          return (
            <Link to={"/Update/" + value.id} onClick={scrollUp} key={value.id}>
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
      </div>
    </div>
  );
};

export default Updates;
