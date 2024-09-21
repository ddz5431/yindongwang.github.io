import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import Education from "./components/education/Education"
import Experience from "./components/experience/Experience"
import {BrowserView, MobileView} from 'react-device-detect';

import "./app.scss"
import { useState } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <>
          <BrowserView>
              <div className="app">
                  <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                  <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                  <div className="sections">
                      <Intro/>
                      <Education/>
                      <Experience/>
                      <Contact/>
                  </div>
              </div>
          </BrowserView>
          <MobileView>
              <div className="app">
                  <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                  <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                  <div className="sections">
                      <Intro/>
                      <Experience/>
                      <Contact/>
                  </div>
              </div>
          </MobileView>
      </>
  );
}

export default App;
