import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import "../screens/Main.css";
import PersonIcon from "@mui/icons-material/Person";

export default function About() {
  return (
    <div>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
        <div className="PLace_Tellers">
          <PersonIcon sx={{ color: "white", marginRight: 1, fontSize: 20 }} />
          ABOUT
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
        <h1 className="text2">
          I Feel Like <span id="name">Developer</span> Tonight.{" "}
        </h1>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1 Complement_text"}
        animatePerScroll={false}
      >
        <span>
          Since beginning my journey as a freelance designer nearly 8 years ago,
          I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chopsone design problem at a
          time.
        </span>
      </ScrollAnimation>
    </div>
  );
}
