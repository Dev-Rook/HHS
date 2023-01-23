import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useScrollUp } from "../../Hooks/useScrollUp";
import Styles from "../../Styles/Components-Styles/UpdateGrid.module.scss";

const UpdateGrid = () => {
  const url = `https://hhs-backen-76xny.ondigitalocean.app/events`;
  const { data, error, loading } = useAxios(url);

  const [backToTop, setBackToTop] = useState(false);
  const {scrollUp} = useScrollUp();

  return (
    <div className={Styles.Section}>
      <div className={Styles.Staff_Card_Section}>
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

export default UpdateGrid;
