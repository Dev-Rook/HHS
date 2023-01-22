import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { Link, useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Styles from "../Styles/Dynamic-Page-Styles/ContentSingle.module.scss";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import CurriculaGrid from "../Components/Secondary/CurriculaGrid";

const CurriculaSingle = () => {
  TabTitle("HSS | Staffer ");
  const { id } = useParams();

  const url = `https://hhs-backen-76xny.ondigitalocean.app/curricula/${id}`;
  const { data, error, loading } = useAxios(url);

  return (
    <div className={Styles.Page}>
      <div className={Styles.Header}>
        <Link to={"/Curriculas"}>
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
        <p className={Styles.Text}>Teacher: {data?.tutor[0].firstName} {data?.tutor[0].lastName}</p>

          <p className={Styles.Text}>
            From: {data?.start_date} to {data?.end_date}
          </p>

          <p className={Styles.Text}>{data?.description}</p>
        </div>
      </div>

      <CurriculaGrid />
    </div>
  );
};

export default CurriculaSingle;
