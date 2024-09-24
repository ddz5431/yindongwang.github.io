import React from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <section id="intro" className="section">
          <Intro />
        </section>
        <section id="education" className="section">
          <Education />
        </section>
        <section id="experience" className="section">
          <Experience />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
