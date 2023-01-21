import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.module.scss";

import Navbar from "./Components/Main/Navbar";
import Footer from "./Components/Main/Footer";

// Page import Start
const Home = lazy(() => import("./Pages/Home"));
const Curricula = lazy(() => import("./Pages/Curricula"));
const Staff = lazy(() => import("./Pages/Staff"));
const Error = lazy(() => import("./Pages/Error"));
// Page Import End

// Dynamic Page Imports Start
const StaffSingle = lazy(() => import("./Dynamic-Pages/StaffSingle.jsx"));
const CurriculaSingle = lazy(() => import("./Dynamic-Pages/CurriculaSingle.jsx"));
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
        <Suspense fallback={""}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"Curricula"} element={<Curricula />} />
            <Route path={"Staff"} element={<Staff />} />
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
