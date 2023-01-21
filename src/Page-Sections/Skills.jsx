import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Curriculas.module.scss";

import SkillsData from "../Data/Skills.json";

const Skills = () => {
  const [data, setData] = useState(SkillsData);
  const [visible, setVisible] = useState(6);

  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title}>
        <p className={Styles.Question}>- Trade / Skills</p>
        <p className={Styles.Brand}>
          Practical Trades For Practical Industries
        </p>
      </div>

      <div className={Styles.Content_Container}>
        {data &&
          data.map((value) => {
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