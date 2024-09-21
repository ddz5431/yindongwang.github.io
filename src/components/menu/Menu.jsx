import React from 'react';

import {BrowserView, MobileView} from "react-device-detect";
import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <>
            <BrowserView>
                <div className={"menu " + (menuOpen && "active") }>
                    <ul>
                        <li onClick={()=>setMenuOpen(false)}>
                            <a href="src/components/menu/Menu#intro">Home</a>
                        </li>
                        <li onClick={()=>setMenuOpen(false)}>
                            <a href="src/components/menu/Menu#education">Education</a>
                        </li>
                        <li onClick={()=>setMenuOpen(false)}>
                            <a href="src/components/menu/Menu#experience">Experience</a>
                        </li>
                        <li onClick={()=>setMenuOpen(false)}>
                            <a href="src/components/menu/Menu#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </BrowserView>
            <MobileView>
                <div className={"menu " + (menuOpen && "active") }>
                    <ul>
                        <li onClick={()=>setMenuOpen(false)}>
                            <a href="src/components/menu/Menu#intro">Home</a>
                        </li>
                        <li onClick={()=>setMenuOpen(false)}>
                            <a href="src/components/menu/Menu#resume">Resume</a>
                        </li>
                        <li onClick={()=>setMenuOpen(false)}>
                            <a href="src/components/menu/Menu#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </MobileView>
        </>
    );
}
