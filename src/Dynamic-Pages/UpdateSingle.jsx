import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { Link, useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Styles from "../Styles/Dynamic-Page-Styles/ContentSingle.module.scss";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import UpdateGrid from "../Components/Secondary/UpdateGrid";

const UpdateSingle = () => {
  TabTitle("HSS | Update ");
  const { id } = useParams();

  const url = `https://hhs-backen-76xny.ondigitalocean.app/events/${id}`;
  const { data, error, loading } = useAxios(url);

  return (
    <div className={Styles.Page}>
      <div className={Styles.Header}>
        <Link to={"/Updates"}>
          <ArrowBackIcon sx={{ color: "red", fontSize: 30 }} />
        </Link>
      </div>

      <div className={Styles.Content_Section}>
        <div className={Styles.Image_Container}>
          <img
            src={`https://hhs-backen-76xny.ondigitalocean.app${data?.image?.url}`}
            alt=""
            className={Styles.Image}
          />
        </div>

        <div className={Styles.Information_Box}>
          <p className={Styles.Text}>{data?.title}</p>
          <p className={Styles.Text}>{data?.catgory}</p>
          <p className={Styles.Text}>{data?.date}</p>
          <p className={Styles.Text}>{data?.description}</p>
        </div>
      </div>

      <UpdateGrid />
    </div>
  );
};

export default UpdateSingle;
