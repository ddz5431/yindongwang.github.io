import "./resume.scss"
import React, { Component } from "react";
import react from 'public/assets/react.svg'


const languages = [
    {
        icon: react,
        name: 'Python',
        level: ''
    },
    {
        icon: react,
        name: 'Java',
        level: ''
    },
    {
        icon: react,
        name: 'HTML',
        level: ''
    },
    {
        icon: react,
        name: 'Latex',
        level: ''
    },
]

const tools = [
    {
        icon: react,
        name: 'Figma',
        level: ''
    },
    {
        icon: react,
        name: 'PS',
        level: ''
    },
    {
        icon: react,
        name: '',
        level: ''
    },
]


const Resume = () => {
    return (
        <div.container>

        </div.container>

    );

}

export default function Resume();
/* export default function Resume() {

    return (
        <div className="resume" id="resume">
            <div className="left"/>
            <div className="stuff">
                    <h1>About me</h1>
                    <hr/>
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
            </div>
        </div>)
}
*/
