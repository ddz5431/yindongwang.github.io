import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import Resume from "./components/resume/Resume"
import Publications from "./components/publications/Publications";

import "./app.scss"
import { useState } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Works/>
        <Resume/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
