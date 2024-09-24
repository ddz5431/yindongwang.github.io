// Intro.jsx
import "./intro.scss";
import React from 'react';
import Play from "./Music";
import profile from '../../assets/profile.jpg';
import { Pace, WindupChildren } from "windups";

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="content-wrapper">
            <div className="top">
                <div className="imageContainer">
                    <img src={profile} alt="" />
                </div>
            </div>
            <div className="middle">
                <WindupChildren>
                    <Pace ms={50}>
                        <span className="typewriter">
                            Hi, there!<br />
                            I'm <span className="colored">Yindong&nbsp;Wang,</span><br />
                            an <span className="colored">AI&nbsp;Researcher.</span><br />
                            I love languages<br />
                            and coding!
                        </span>
                    </Pace>
                </WindupChildren>
            </div>
            <div className="bottom">
                <Play />

            </div>

            </div>
            </div>
    );
}
