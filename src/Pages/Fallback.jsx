import React from "react";
import Styles from "../Styles/Page-Styles/Fallback.module.scss";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Fallback = () => {
  return (
    <div className={Styles.Page}>
      <Box className={Styles.Box} sx={{ display: "flex" }}>
        <CircularProgress sx={{color: "white"}} />
      </Box>
    </div>
  );
};

export default Fallback;