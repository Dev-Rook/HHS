import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.module.scss";

import Navbar from "./Components/Main/Navbar";
import Footer from "./Components/Main/Footer";

// Page import Start
const Home = lazy(() => import("./Pages/Home"));
const Curricula = lazy(() => import("./Pages/Curricula"));
const Staff = lazy(() => import("./Pages/Staff"));
const About = lazy(() => import("./Pages/About"));
const Updates = lazy(() => import("./Pages/Updates"));
const Documents = lazy(() => import("./Pages/Documents"));
const Apply = lazy(() => import("./Pages/Apply"));
const Fallback = lazy(() => import("./Pages/Fallback"));
const Error = lazy(() => import("./Pages/Error"));
// Page Import End

// Dynamic Page Imports Start
const StaffSingle = lazy(() => import("./Dynamic-Pages/StaffSingle.jsx"));
const CurriculaSingle = lazy(() =>
  import("./Dynamic-Pages/CurriculaSingle.jsx")
);
const UpdateSingle = lazy(() => import("./Dynamic-Pages/UpdateSingle.jsx"));
// Dynamic Page Imports End

const App = () => {
  const [backToTop, setBackToTop] = useState(false);

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
    <div className={Styles.App}>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/Curriculas"} element={<Curricula />} />
            <Route path={"/Staff"} element={<Staff />} />
            <Route path={"/About"} element={<About />} />
            <Route path={"/Updates"} element={<Updates />} />
            <Route path={"/Documents"} element={<Documents />} />
            <Route path={"/Apply"} element={<Apply />} />
            <Route path={"*"} element={<Error />} />

            {/* Dynamic Routes */}
            <Route path={"/Staffer/:id"} element={<StaffSingle />} />
            <Route path={"/Curricula/:id"} element={<CurriculaSingle />} />
            <Route path={"/Update/:id"} element={<UpdateSingle />} />
            {/* Dynamic Routes */}
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
