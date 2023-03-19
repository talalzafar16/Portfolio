import React from "react";
import { Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import profPic from "../assets/profile.png";
import "../screens/Main.css";

const SideProfile = () => {
  return (
    <div>
      <div className="sticky">
        <div className="static">
          <div className="Name_Box">
            <div>
              <h2 className="Name">Talal Zafar</h2>
            </div>
            <div>
              <h2 className="Post">
                Mern Stack <br /> Developer
              </h2>
            </div>
          </div>
          <div className="imgBox">
            <img className="pic" src={profPic} alt="Profile" />
          </div>
          <div className="Email_Box ">
            <h2>talalzafar84@gmail.com</h2>
            <h2>Base in Karachi, PK</h2>
          </div>
          <div className="copyright">
            <h4>© 2023 Talal. All Rights Reserved</h4>
          </div>
          <div className="links">
            <a href="#">
              <TwitterIcon
                className="Icon"
                sx={{ color: "gray", fontSize: 26 }}
              />
            </a>
            <a href="#">
              <InstagramIcon
                className="Icon"
                sx={{ color: "gray", fontSize: 26 }}
              />
            </a>
            <a href="#">
              <LinkedInIcon
                className="Icon"
                sx={{ color: "gray", fontSize: 26 }}
              />
            </a>
            <a href="#">
              <GitHubIcon
                className="Icon"
                sx={{ color: "gray", fontSize: 26 }}
              />
            </a>
          </div>
          <div>
            <Button
              className="Hireme_Button"
              startIcon={<EmailIcon />}
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
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideProfile;
