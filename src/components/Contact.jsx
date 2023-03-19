import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";
import { Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import "animate.css/animate.compat.css";
import "../screens/Main.css";


export default function Contact() {
    
        return (
    <div>
        <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
        <div className="PLace_Tellers">
          <AttachMoneyIcon sx={{ color: "white", marginRight: 1, fontSize: 20 }} />
          CONGTACT
        </div>
      </ScrollAnimation>
        <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
        <h1 className="text3">
          Let's Work <span id="name">Together!</span>
        </h1>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1"}
        animatePerScroll={false}
      >
      <div>
        <h3 className="text9">talalzafar84@gmail.com</h3>
      </div>
      </ScrollAnimation> 
      <ScrollAnimation 
      animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1 contact_box"}
        animatePerScroll={false}>
      <div className='box'>
        <input placeholder="Your Full Name" type="text" className="inputField"/>
        <h4 id="help" className="helper_text">Full Name</h4>
    </div>
      <div className='box'>
        <input type="text" placeholder="Your email address" className="inputField"/>
        <h4 id="help" className="helper_text">Email</h4>
    </div>
      <div className='box'>
        <input type="number" maxLength={7} size={7} placeholder="Your Phone Number" className="inputField"/>
        <h4 id="help" className="helper_text">Phone</h4>
    </div>
      <div className='box'>
        <input type="text" placeholder="Write Email Subject" className="inputField"/>
        <h4 id="help" className="helper_text">Subject</h4>
      </div>
      <div className='box'>
        <input type="text" placeholder="Write Your Message here..." className="inputField"/>
        <h4 id="help" className="helper_text">Message</h4>
    </div>
      </ScrollAnimation>
      <ScrollAnimation 
      animateIn={"fadeInUp"}
        animateOnce={false}
        className={"sec-1 Contact_Button"}
        animatePerScroll={false}>
            <Button
              className="Hireme_Button"
              startIcon={<EmailIcon />}
              sx={{
                fontSize: 18,
                backgroundColor: "#28e98c",
                marginTop: 2,
                width: 300,
                height: 49,
                color: "black",
                borderRadius: 30,
              }}
            >
             Send Message
            </Button>
      </ScrollAnimation>
    </div>
  )
}
