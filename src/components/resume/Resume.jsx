import "./resume.scss"
import React, { Component } from "react";


export default function Resume() {

    return (
        <div className="resume" id="resume">
            <div className="left"/>
            <div className="stuff">
                <br><br>
                    <h1>Resume</h1>
                    <h2>Yindong Wang</h2>
                    <hr/>
                    <br>
                        <p className="head">Education</p>
                        <ul>
                            <li>Master of Science | Computational Linguistics</li>
                        </ul>
                        <p className="head">Interests</p>
                        <ul>
                            <li>Drawing</li>
                            <li>Photography</li>
                            <li>Design</li>
                            <li>Programming</li>
                            <li>Computer Science</li>
                        </ul>
                    </br>
            </div>
    })
}