import "./intro.scss";
import React from 'react';
import Play from "./Music";
import profile from '../../assets/profile.jpg';

import {Pace, WindupChildren} from "windups";

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src={profile} alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="right_above">
                    <WindupChildren>
                        <Pace ms={50}>
                        <span className="typewriter">
                            Hi, there!<br/>
                            I'm <span className="colored">Yindong&nbsp;Wang,</span><br/>
                            a <span className="colored">Computational&nbsp;Linguist.</span><br/>
                            I love languages<br/>
                            and coding!
                        </span>
                        </Pace>
                    </WindupChildren>
                </div>

                <div className="play">
                    <div><Play /></div>
                </div>
            </div>
        </div>
    );
}