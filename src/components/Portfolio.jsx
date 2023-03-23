import React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import {useState} from "react";
import "../screens/Main.css";
import { Box } from "@mui/material";

export default function Portdolio() {
  let [width,setWidth]=useState(window.innerWidth);
  

  return (
    <div>
      {
        width>=600?<Box>
        <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
        <div className="PLace_Tellers">
          <ListAltIcon sx={{ color: "white", marginRight: 1, fontSize: 20 }} />
          PORTFOLIO
        </div>
      </ScrollAnimation>
        <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
        <h1 className="text3">
          Featured<span id="name"> Projects</span>.
        </h1>
      </ScrollAnimation>
      <div className="portfolio">
        <ScrollAnimation
          animateIn={"fadeInUp"}
          animateOnce={false}
          className={"sec-1"}
          animatePerScroll={false}
        >
          <a className="remove_underline" href="#">
            <img
              className="img1_port"
              src="https://wordpressriverthemes.com/HTML/drake/assets/images/portfolio1.jpg"
            />
            <h3 className="port_text" id="need">
              Bureau - Architecture Studio Website
            </h3>
          </a>
        </ScrollAnimation>
        <div className="port">
          <ScrollAnimation
            animateIn={"fadeInLeft"}
            animateOnce={false}
            className={"sec-1 img23_port_box"}
            animatePerScroll={false}
          >
            <a className="remove_underline" href="#">
              <img
                className="img23_port"
                src="https://wordpressriverthemes.com/HTML/drake/assets/images/portfolio2.jpg"
              />
              <h3 className="port_text">Moonex WordPress Theme</h3>
            </a>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn={"fadeInRight"}
            animateOnce={false}
            className={"sec-1 img23_port_box"}
            animatePerScroll={false}
          >
            <a className="remove_underline" href="#">
              <img
                className="img23_port"
                src="https://wordpressriverthemes.com/HTML/drake/assets/images/portfolio3.jpg"
              />
              <h3 className="port_text">Taskly Dashboard</h3>
            </a>
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          animateIn={"fadeInUp"}
          animateOnce={false}
          className={"sec-1"}
          animatePerScroll={false}
        >
          <a className="remove_underline" href="#">
            <img
              className="img1_port"
              src="https://wordpressriverthemes.com/HTML/drake/assets/images/portfolio4.jpg"
            />
            <h3 className="port_text">Taskly Dashboard</h3>
          </a>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={"fadeInUp"}
          animateOnce={false}
          className={"sec-1"}
          animatePerScroll={false}
        >
          <a className="remove_underline" href="#">
            <img
              className="img1_port"
              src="https://wordpressriverthemes.com/HTML/drake/assets/images/portfolio5.jpg"
            />
            <h3 className="port_text">Taskly Dashboard</h3>
          </a>
        </ScrollAnimation>
      </div>
      </Box>

      :
      <Box>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
        <div className="PLace_Tellers">
          <ListAltIcon sx={{ color: "white", marginRight: 1, fontSize: 20 }} />
          PORTFOLIO
        </div>
      </ScrollAnimation>
        <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
        <h1 className="text3">
          Featured<span id="name"> Projects</span>.
        </h1>
      </ScrollAnimation>
      <div className="portfolio">
        <ScrollAnimation
          animateIn={"fadeInUp"}
          animateOnce={false}
          className={"sec-1"}
          animatePerScroll={false}
        >
          <a className="remove_underline" href="#">
            <img
              className="img1_port"
              src="https://wordpressriverthemes.com/HTML/drake/assets/images/portfolio1.jpg"
            />
            <h3 className="port_text" id="need">
              Bureau - Architecture Studio Website
            </h3>
          </a>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={"fadeInLeft"}
          animateOnce={false}
          className={"sec-1"}
          animatePerScroll={false}
        >
          <a className="remove_underline" href="#">
            <img
              className="img1_port"
              src="https://wordpressriverthemes.com/HTML/drake/assets/images/portfolio2.jpg"
            />
            <h3 className="port_text" id="need">
            Moonex WordPress Theme
            </h3>
          </a>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={"fadeInRight"}
          animateOnce={false}
          className={"sec-1"}
          animatePerScroll={false}
        >
          <a className="remove_underline" href="#">
            <img
              className="img1_port"
              src="https://wordpressriverthemes.com/HTML/drake/assets/images/portfolio3.jpg"
            />
            <h3 className="port_text" id="need">
            Taskly Dashboard
            </h3>
          </a>
        </ScrollAnimation>
        
        <ScrollAnimation
          animateIn={"fadeInLeft"}
          animateOnce={false}
          className={"sec-1"}
          animatePerScroll={false}
        >
          <a className="remove_underline" href="#">
            <img
              className="img1_port"
              src="https://wordpressriverthemes.com/HTML/drake/assets/images/portfolio4.jpg"
            />
            <h3 className="port_text">Taskly Dashboard</h3>
          </a>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={"fadeInRight"}
          animateOnce={false}
          className={"sec-1"}
          animatePerScroll={false}
        >
          <a className="remove_underline" href="#">
            <img
              className="img1_port"
              src="https://wordpressriverthemes.com/HTML/drake/assets/images/portfolio5.jpg"
            />
            <h3 className="port_text">Taskly Dashboard</h3>
          </a>
        </ScrollAnimation>
      </div>
      </Box>
  }
    </div>
  );
}
