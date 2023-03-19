import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import bgVideo from "../assets/connection-113368.mp4";
import SideProfile from "../components/SideProfile.jsx";
import "./Main.css";
import { useState, useEffect } from "react";
import Loading from "react-fullscreen-loading";
import Skills from "../components/Skills";
import About from "../components/About";
import Services from "../components/Services";
import Resume from "../components/Resume";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export const Main = () => {
  const [loader, setloader] = useState(false);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 3000);
  }, []);

  return (
    <div>
      <Loading loading={loader} background="black" loaderColor="white" />
      <div className="main">
        <video src={bgVideo} autoPlay loop muted />
        <div className="overlay"></div>
        <div className="large">
          <SideProfile />
          <div className="scrollable">
            <Intro />
            <About />
            <Resume />
            <Services />
            <Skills />
            <Portfolio/>
            <Contact/>
            </div>
          </div>
        </div>
      </div>
  );
};
