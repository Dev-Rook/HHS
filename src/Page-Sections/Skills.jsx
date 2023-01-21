import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Curriculas.module.scss";

import SearchIcon from "@mui/icons-material/Search";

import SkillsData from "../Data/Skills.json";

const Skills = () => {
  const [data, setData] = useState(SkillsData);
  const [search, setSearch] = useState("");

  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title}>
        <p className={Styles.Question}>- Trade / Skills</p>
        <p className={Styles.Brand}>
          Practical Trades For Practical Industries
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
                : item.Title.toLowerCase().includes(search) ;
            })
            .map((value) => {
            return (
              <Link to={"/Curricula/" + value.id} key={value.id}>
                <div className={Styles.Card}>
                  <div className={Styles.Image_Container}>
                    <p className={Styles.Category}>{value?.Title}</p>
                    <img src={value.Image} alt="" className={Styles.Image} />
                  </div>
                  <div className={Styles.Information_Box}>
                    <p className={Styles.Teacher}>{value?.Tutors[0].Name}</p>

                    <p className={Styles.Description}>
                      {value?.Description.slice(0, 130)}...
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

export default Skills;
