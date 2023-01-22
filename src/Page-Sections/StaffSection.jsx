import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useAxios from "../Hooks/useAxios";
import Styles from "../Styles/Page-Section-Styles/StaffSection.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

const StaffSection = () => {
  const url = `https://hhs-backen-76xny.ondigitalocean.app/staffs`;
  const { data, error, loading } = useAxios(url);

  return (
    <div className={Styles.Section}>
      <div className={Styles.Section}>
        <div className={Styles.Content_Container}>
          <p className={Styles.Small_Text}>Management / Staff</p>
          <p className={Styles.Large_Text}>HHS Gate Keepers</p>

          <Link to={"/Staff"}>
            <button className={Styles.Staff_Button}>View All</button>
          </Link>
        </div>

        <div className={Styles.Diffuser}></div>

        <div className={Styles.Slider_Container}>
          <Swiper
            slidesPerView={4}
            speed={2000}
            spaceBetween={0}
            modules={[Autoplay, Navigation, FreeMode, Mousewheel]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            loop
            mousewheel={true}
            className={Styles.Swiper}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              600: {
                slidesPerView: 3,
              },
              996: {
                slidesPerView: 3,
              },
              1920: {
                slidesPerView: 4,
              },
            }}
          >
            {data?.map((value) => {
              return (
                <SwiperSlide key={value?.id}>
                  <Link to={"/Staffer/" + value.id} className={Styles.Link}>
                    <div className={Styles.Project_Card}>
                      <div className={Styles.Text_Container}>
                        <p className={Styles.Name}>
                          {value?.firstName} {value?.lastName}
                        </p>
                        <p className={Styles.Title}>{value?.title}</p>
                      </div>
                      <div className={Styles.Diffuser}></div>
                      <div className={Styles.Image_Container}>
                        {
                          <img
                            src={`https://hhs-backen-76xny.ondigitalocean.app${value?.image?.url}`}
                            alt=""
                            className={Styles.Image}
                          />
                        }
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default StaffSection;
