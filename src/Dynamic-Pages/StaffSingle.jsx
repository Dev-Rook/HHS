import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import { Link, useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { useScrollUp } from "../Hooks/useScrollUp";
import Styles from "../Styles/Dynamic-Page-Styles/ContentSingle.module.scss";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import StaffGrid from "../Components/Secondary/StaffGrid";
import { useScroll } from "framer-motion";

const StaffSingle = () => {
  TabTitle("HSS | Staffer ");
  const { id } = useParams();

  const url = `https://hhs-backen-76xny.ondigitalocean.app/staffs/${id}`;
  const { data, error, loading } = useAxios(url);

  const {scrollUp} = useScrollUp

  return (
    <div className={Styles.Page}>
      <div className={Styles.Header}>
        <Link to={"/Staff"}>
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
          <p className={Styles.Text}>
            {data?.firstName} {data?.lastName}
          </p>
          <p className={Styles.Text}>{data?.title}</p>
          <p className={Styles.Text}>{data?.bio}</p>
        </div>

        <div className={Styles.Qualifications_Container}>
          {/* <p className={Styles.Title}>Qualifications & Awards</p> */}
        </div>
      </div>

      <StaffGrid />
    </div>
  );
};

export default StaffSingle;
