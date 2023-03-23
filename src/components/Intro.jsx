import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import HomeIcon from "@mui/icons-material/Home";
import "animate.css/animate.compat.css";
import "../screens/Main.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {useState} from "react";
import { Box } from "@mui/material";

export default function Intro() {
  
  let [width,setWidth]=useState(window.innerWidth);
  console.log(width)
  return(<div>

    {
      width>=600?<Box>
      <div>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={true}
        className={"sec-1 PLace_Tellers delay-3s"}
        animatePerScroll={false}
      >
          <HomeIcon sx={{ color: "white", marginRight: 1, fontSize: 20 }} />
          INTRODUCE
       </ScrollAnimation>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={true}
        className={"sec-1 delay-3s"}
        animatePerScroll={false}
      >
        <h1 className="text">
          Say Hi from <span id="name">Talal</span>,{" "}
        </h1>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={true}
        className={"sec-1 sub_text delay-3s"}
        animatePerScroll={false}
      >
        <span>MERN Stack Developer of Mobile and Web applications</span>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={true}
        className={"sec-1 Complement_text delay-3s"}
        animatePerScroll={false}
      >
        <span>
          I design and code beautifully simple things and i love what i do.{" "}
          <br />
          Just simple like that!
        </span>
      </ScrollAnimation>
      <div className="rotate_box_box">
        <ScrollAnimation
          animateIn={"fadeInUp"}
          animateOnce={false}
          className={"sec-1 rotate_box"}
          animatePerScroll={false}
          >
          <div>
            <a href="#">
              <img
                className="rotate_image"
                src="https://wordpressriverthemes.com/HTML/drake/assets/images/round-text.png"
                />
              <ArrowDownwardIcon
                className="arrow"
                sx={{ color: "white", fontSize: 49 }}
                />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="Main_Exp_Box">
        <ScrollAnimation
          animateIn={"fadeInLeft"}
          animateOnce={false}
          className={"sec-1"}
          animatePerScroll={false}
          >
          <div className="Child_Exp_Box">
            <h1>10+</h1>
            <p>
              YEARS OF
              <br /> EXPERIENCE
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={"fadeInRight"}
          animateOnce={false}
          className={"sec-1"}
          animatePerScroll={false}
        >
          <div className="Child_Exp_Box">
            <h1>182+</h1>
            <p>
              PROJECTS COMPLETED ON <br /> 10 COUNTRIES
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
    </Box>
    :
    <div>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1 PLace_Tellers"}
        animatePerScroll={false}
      >
          <HomeIcon sx={{ color: "white", marginRight: 1, fontSize: 20 }} />
          INTRODUCE
       </ScrollAnimation>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
        <h1 className="text">
          Say Hi from <span id="name">Talal</span>,
        </h1>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1 sub_text"}
        animatePerScroll={false}
      >
        <span>MERN Stack Developer of Mobile and Web applications</span>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1 Complement_text"}
        animatePerScroll={false}
      >
        <span>
          I design and code beautifully simple things and i love what i do.
          Just simple like that!
        </span>
      </ScrollAnimation>
      <div className="rotate_box_box">
        <ScrollAnimation
          animateIn={"fadeInUp"}
          animateOnce={false}
          className={"sec-1 rotate_box"}
          animatePerScroll={false}
          >
          <div>
            <a href="#">
              <img
                className="rotate_image"
                src="https://wordpressriverthemes.com/HTML/drake/assets/images/round-text.png"
                />
              <ArrowDownwardIcon
                className="arrow"
                sx={{ color: "white", fontSize: 49 }}
                />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="Main_Exp_Box">
        <ScrollAnimation
          animateIn={"fadeInLeft"}
          animateOnce={false}
          className={"sec-1"}
          animatePerScroll={false}
          >
          <div className="Child_Exp_Box">
            <h1>10+</h1>
            <p>
              YEARS OF
              <br /> EXPERIENCE
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={"fadeInRight"}
          animateOnce={false}
          className={"sec-1"}
          animatePerScroll={false}
        >
          <div className="Child_Exp_Box">
            <h1>182+</h1>
            <p>
              PROJECTS COMPLETED ON 10 COUNTRIES
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  }
        </div> 
  )  
}
