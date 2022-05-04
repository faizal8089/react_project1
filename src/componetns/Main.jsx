import React from "react";
import email from '../images/email.png';
import Linkedin from '../images/linkedin.png';
import About from "./About";

export default function Main(){
    return(
        <div className="main">
            <h2 id="name">Faizal Sulthan</h2>
            <h4 id="position">React Developer</h4>
            <a href="https://linktr.ee/faizalsulthan"><p id="links">Links</p></a>
            <div className="socialMedia">
                <button id="Email">
                    <div id="emailIcon">
                        <img id="emailLogo" src={email} alt="" />
                        <a href="mailto://faizalsulthan@outlook.com" target="_blank">Email</a>
                    </div>
                </button>
                <button id="LinkedIn">
                        <div id="linkedinIcon">
                            <img id="linkedinLogo" src={Linkedin} alt="" />
                            <a href="https://www.linkedin.com/in/faizalsulthan5c/" target="_blank">Linkedin</a>
                        </div>
                </button>
            </div>
            <About/>
        </div>
    );
}