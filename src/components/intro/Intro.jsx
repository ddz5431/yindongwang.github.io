import "./intro.scss";
import React from 'react';
import Typewriter from "react-typewriter";
import Play from "./Music"


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
                        Hi, there!<br/>I'm <inline>Yindong Wang</inline>,<br/>a <inline>Computational Linguist</inline>.<br/>I love languages<br/>and coding!
                        </span>
                    </Typewriter>
                </div>
                <div className="play">
                    <div><Play /></div>
                </div>
                {/*<a className="imageContainer2" href="#works">*/}
                {/*    <img src="assets/down.png" alt="" />*/}
                {/*</a>*/}
            </div>
        </div>
    );
}
