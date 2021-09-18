import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Works from "./components/works/Works"
//import Testimonials from "./components/testimonials/Testimonials"
//import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import Cv from "./components/cv/Cv"
import "./app.scss"
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Works/>
        <Cv/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
