import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import Styles from "../../Styles/Components-Styles/OtherStaffer.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

import ListGroup from 'react-bootstrap/ListGroup';

const OtherStaffers = () => {
  const url = `https://hhs-backen-76xny.ondigitalocean.app/staffs`;
  const { data, error, loading } = useAxios(url);

  return (
    <div className={Styles.Container}>
      <ListGroup className={Styles.ListGroup}>
        {data?.map((value) => {
          return (
            <div key={value.id}>
              <ListGroup.Item className={Styles.Item}>
                <Link to={"/Staffer/" + value.id} className={Styles.Link}>
                  |
                  <p>{value.firstName} {value.firstName}</p>
                  |
                </Link>
              </ListGroup.Item>
            </div>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default OtherStaffers;
