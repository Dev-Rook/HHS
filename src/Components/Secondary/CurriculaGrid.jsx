import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import Styles from "../../Styles/Components-Styles/CurriculaGrid.module.scss";

import SearchIcon from "@mui/icons-material/Search";

const CurriculaGrid = () => {
  const url = `https://hhs-backen-76xny.ondigitalocean.app/curricula`;
  const { data, error, loading } = useAxios(url);

  const [backToTop, setBackToTop] = useState(false);
  const [search, setSearch] = useState("");

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
    <div className={Styles.Section}>
      <div className={Styles.Input_Wrapper}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Skill"
          autoCapitalize="none"
          className={Styles.Nav_Input}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={Styles.Staff_Card_Section}>
        <div className={Styles.Content_Container}>
          {data
            ?.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search);
            })
            .map((value) => {
              return (
                <Link
                  to={"/Curricula/" + value.id}
                  onClick={scrollUp}
                  key={value.id}
                >
                  <div className={Styles.Card}>
                    <div className={Styles.Image_Container}>
                      <p className={Styles.Name}>
                        {value.firstName} {value.lastName}
                      </p>
                      {value?.image?.url ? (
                        <img
                          src={`https://hhs-backen-76xny.ondigitalocean.app${value?.image?.url}`}
                          alt=""
                          className={Styles.Image}
                        />
                      ) : null}
                    </div>
                    <div className={Styles.Information_Container}>
                      <p className={Styles.Title}>{value.title}</p>
                      <p className={Styles.Bio}>
                        {value.description?.slice(0, 120)}...
                      </p>
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

export default CurriculaGrid;
