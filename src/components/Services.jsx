import React from "react";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import "../screens/Main.css";
import MenuIcon from "@mui/icons-material/Menu";

export default function Services() {
  return (
    <div>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
        <div className="PLace_Tellers">
          <MenuIcon sx={{ color: "white", marginRight: 1, fontSize: 20 }} />
          SERVICES
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
        <h1 className="text2">
          My <span id="name">Specializations</span> here.
        </h1>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
        <div className="serv_box">
          <div className="serv_text">
            <h2 className="text4">Website Development</h2>
            <p className="Complement_text2">
              I build fully responsive websites utilizing React.js or Next.js
            </p>
            <h4 className="text6">12 PROJECTS</h4>
          </div>
          <div className="serv_Icon">
            <CodeOffIcon sx={{ color: "#28e98c", fontSize: 60 }} />
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
        <div className="serv_box">
          <div className="serv_text">
            <h2 className="text4">App Development</h2>
            <p className="Complement_text2">
              I build fully functional applications with React Native
            </p>
            <h4 className="text6">7 PROJECTS</h4>
          </div>
          <div className="serv_Icon">
            <DeveloperModeIcon sx={{ color: "#28e98c", fontSize: 60 }} />
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
