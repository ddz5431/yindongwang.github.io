import "./intro.scss";
import React from 'react';
import Typewriter from "react-typewriter";


export default function Intro() {
    
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/profile.jpg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="typewritter">
                    <Typewriter typing={1}> 
                        <span>
                        "Hi, there! I'm <inline>Yindong Wang</inline>, a <inline>Computational Linguist</inline> who has just finished the master studies at <a href="https://www.cis.uni-muenchen.de/">CIS</a> <a href="https://www.lmu.de/de/index.html">LMU</a>. I love languages and coding. Below you can check a few projects I've worked on."
                        </span>
                    </Typewriter>
                </div>
                <a className="imageContainer2" href="#works">
                    <img src="assets/down.png" alt=""></img>
                </a>
            </div>
        </div>
    );
}