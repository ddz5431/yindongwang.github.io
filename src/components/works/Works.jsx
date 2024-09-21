import React from 'react';

import "./works.scss";
import arrow from "../../assets/arrow.png";
import {useState} from "react";
import chatbot from "../../assets/chatbot.png";
import chatbotIcon from "../../assets/chatbot_icon.png";
import thesis from "../../assets/thesis.png";
import thesisIcon from "../../assets/thesis_icon.png";
import branding from "../../assets/branding.png";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
          {
            id: 1,
            title: "Chatbot",
            img: chatbot,
            icon: chatbotIcon
          },
          {
            id: 2,
            title: "Master-thesis project",
            img: thesis,
            icon: thesisIcon
          },
          {
            id: 3,
            title: "Personal Website",
            img: "",
            icon: branding
          }
    ]

    const handleClick = (way) => {
        way === "left" ? 
        setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : 
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${ currentSlide *100}vw)`}}>
                {data.map(d => (
                    <div key={"works-entry-" + d.id} className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt=""></img>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.description}
                                    </p>
                                    <span>
                                        <a href="https://gitlab2.cip.ifi.lmu.de/wangyind/bingoparser">Projects</a>
                                    </span>
                                </div>
                            </div>
                            <div className="right">
                                <img 
                                    src={d.img} alt="">   
                                </img>
                            </div>
                        </div>
                    </div>
                ))}  
        </div>
        <img src={arrow} className="arrow left" alt="" onClick={() => handleClick("left")} />
        <img src={arrow} className="arrow right" alt="" onClick={() => handleClick()}/>
    </div>
);
}
