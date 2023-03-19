import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import "../screens/Main.css";
import DescriptionIcon from "@mui/icons-material/Description";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Button } from "@mui/material";

export default function Resume() {
  return (
    <div>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
        <div className="PLace_Tellers">
          <DescriptionIcon
            sx={{ color: "white", marginRight: 1, fontSize: 20 }}
          />
          RESUME
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn={"fadeInRight"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
        <h1 className="text3">
          Check my <span id="name">Resume</span> here.
        </h1>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn={"fadeInLeft"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
        <div className="cnt_btn">
          <Button
            className="Hireme_Button"
            startIcon={<ArrowDownwardIcon />}
            sx={{
              marginBottom: 1,
              fontSize: 18,
              backgroundColor: "#28e98c",
              marginTop: 2,
              width: 300,
              height: 49,
              color: "black",
              borderRadius: 30,
            }}
          >
            CLick To Download
          </Button>
        </div>
      </ScrollAnimation>
    </div>
  );
}
