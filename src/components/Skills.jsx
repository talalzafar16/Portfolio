import React from "react";
import "animate.css/animate.compat.css";
import "../screens/Main.css";
import ScrollAnimation from "react-animate-on-scroll";
import react from "../assets/react.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import mongo from "../assets/mongo.png";
import next from "../assets/next.png";
import native from "../assets/native.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import firebase from "../assets/firebase.png";
import C from "../assets/C++.png";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

export default function Skills() {
  return (
    <div>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
        <div className="PLace_Tellers">
          <AccountTreeIcon
            sx={{ color: "white", marginRight: 1, fontSize: 20 }}
          />
          SKILLS
        </div>
      </ScrollAnimation>
      <div className="skill_section">
        <ScrollAnimation
          animateIn={"fadeInLeft"}
          animatePerScroll={false}
          animateOnce={false}
          className={"sec-1"}
        >
          <div className="skill">
            <div className="skill_box">
              <img className="logo" src={html} />
            </div>
            <h6 className="skill_text">HTML</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={"fadeInDown"}
          animatePerScroll={false}
          animateOnce={false}
          className={"sec-1"}
        >
          <div className="skill">
            <div className="skill_box">
              <img className="logo" src={css} />
            </div>
            <h6 className="skill_text">CSS</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={"fadeInUp"}
          animatePerScroll={false}
          animateOnce={false}
          className={"sec-1"}
        >
          <div className="skill">
            <div className="skill_box">
              <img className="logo" src={javascript} />
            </div>
            <h6 className="skill_text">Javascript</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={"fadeInRight"}
          animatePerScroll={false}
          animateOnce={false}
          className={"sec-1"}
        >
          <div className="skill">
            <div className="skill_box">
              <img className="logo" src={python} />
            </div>
            <h6 className="skill_text">Pyhton</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={"fadeInRight"}
          animatePerScroll={false}
          animateOnce={false}
          className={"sec-1"}
        >
          <div className="skill">
            <div className="skill_box">
              <img className="logo" src={react} />
            </div>
            <h6 className="skill_text">React</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={"fadeInUp"}
          animatePerScroll={false}
          animateOnce={false}
          className={"sec-1"}
        >
          <div className="skill">
            <div className="skill_box">
              <img className="logo" src={next} />
            </div>
            <h6 className="skill_text">Next</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={"fadeInDown"}
          animatePerScroll={false}
          animateOnce={false}
          className={"sec-1"}
        >
          <div className="skill">
            <div className="skill_box">
              <img className="logo" src={node} />
            </div>
            <h6 className="skill_text">Node</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={"fadeInLeft"}
          animatePerScroll={false}
          animateOnce={false}
          className={"sec-1"}
        >
          <div className="skill">
            <div className="skill_box">
              <img className="logo" src={mongo} />
            </div>
            <h6 className="skill_text">MongoDb</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={"fadeInLeft"}
          animatePerScroll={false}
          animateOnce={false}
          className={"sec-1"}
        >
          <div className="skill">
            <div className="skill_box">
              <img className="logo" src={firebase} />
            </div>
            <h6 className="skill_text">Firebase</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={"fadeInUp"}
          animatePerScroll={false}
          animateOnce={false}
          className={"sec-1"}
        >
          <div className="skill">
            <div className="skill_box">
              <img className="logo" src={C} />
            </div>
            <h6 className="skill_text">C++</h6>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn={"fadeInRight"}
          animatePerScroll={false}
          animateOnce={false}
          className={"sec-1"}
        >
          <div className="skill">
            <div className="skill_box">
              <img className="logoNative" src={native} />
            </div>
            <h6 className="skill_text">React Native</h6>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
