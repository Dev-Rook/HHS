import React from "react";
import Styles from "../Styles/Page-Section-Styles/Map.module.scss";

const Map = () => {
  return (
    <div className={Styles.Section}>
      <iframe
        width="100%"
        height="100%"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=hopewell%20high%20jamaica&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"

      ></iframe>
    </div>
  );
};

export default Map;
