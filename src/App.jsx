import React from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Timeline from './components/timeline/Timeline';
import Contact from './components/contact/Contact';
import './app.scss';


// @ts-ignore
const App: React.FC = () => (
  <div className="app">
    <Topbar />
    <div className="sections">
      <section id="intro" className="section">
        <Intro />
      </section>
      <section id="timeline" className="section">
        <Timeline />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  </div>
);

export default App;
