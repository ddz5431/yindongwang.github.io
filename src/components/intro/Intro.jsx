import React, { useState, useRef, useEffect } from 'react';
import { Pause, WindupChildren, CharWrapper, Pace } from "windups";
import profile from '../../assets/profile_old.jpg';
import "./intro.scss";

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const TypewriterContent = () => (
  <div className="subtle-typewriter">
    <WindupChildren>
      <Pace ms={100}>
        <span> Fun facts about me:
            1. I was an avid tree climber in primary school 🌳.
            2. Friends used to call me "social queen" (still a mystery to me) 👑.
            3. 日本語が少し話せますよ 🇯🇵.
        </span>
      </Pace>
    </WindupChildren>
  </div>
);

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="content-wrapper">
                <div className="left-column">
                    <div className="imageContainer">
                        <img src={profile} alt="Yindong Wang" />
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/ddz5431" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                        <a href="https://linkedin.com/in/yindongwang" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                        <a href="mailto:hi@yindong.me"><MailIcon /></a>
                    </div>
                </div>
                <div className="right-column">
                    <div className="main-content">
                        <div className="multilingual-greeting">
                            <h1 className="greeting-line">你好，我是<span className="colored">王殷冬</span></h1>
                            <h1 className="greeting-line">Hi, I'm <span className="colored">Yīndōng Wáng</span></h1>
                            <h1 className="greeting-line">Hallo, ich bin <span className="colored">Yīndōng Wáng</span></h1>
                        </div>
                        <p>
                            As an AI researcher with a multilingual background in Chinese, English and German,
                            I'm dedicated to developing safe and trustworthy AI systems that respect and embrace human
                            diversity. I strive to ensure that AI technologies are not only intelligent but also ethical,
                            unbiased, and beneficial to all of humanity.
                        </p>
                        <p className="tagline">My mission: Exploring the frontiers of AI Agents research to shape a better AGI for humanity.</p>
                    </div>
                    <div className="tech-icons">
                    </div>
                </div>
            </div>
            <div className="bottom">
                <TypewriterContent />
            </div>
        </div>
    );
}