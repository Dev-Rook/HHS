import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Styles from "../Styles/Page-Section-Styles/Curriculas.module.scss";

import SearchIcon from "@mui/icons-material/Search";


const Curriculas = () => {
  const url = `https://hhs-backen-76xny.ondigitalocean.app/curricula`;
  const { data, error, loading } = useAxios(url);
  const [search, setSearch] = useState("");

  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title}>
        <p className={Styles.Question}></p>
        <p className={Styles.Brand}>
          Browse Skills & Subjects
        </p>
      </div>

      <div className={Styles.Input_Wrapper}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Skill"
          className={Styles.Nav_Input}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={Styles.Content_Container}>
        {data
            ?.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search) ;
            })
            .map((value) => {
            return (
              <Link to={"/Curricula/" + value.id} key={value.id}>
                <div className={Styles.Card}>
                  <div className={Styles.Image_Container}>
                    <p className={Styles.Category}>{value?.title}</p>
                    <img src={value.Image} alt="" className={Styles.Image} />
                  </div>
                  <div className={Styles.Information_Box}>
                    <p className={Styles.Teacher}>{value?.tutor[0].firstName}</p>
                    {/* <p className={Styles.Teacher}>{value?.type}</p> */}

                    <p className={Styles.Description}>
                      {value?.description?.slice(0, 120)}...
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Curriculas;
