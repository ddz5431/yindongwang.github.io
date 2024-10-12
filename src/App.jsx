import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Timeline from './components/resume/Timeline';
import Publications from "./components/publications/Publications";
import { combinedTimeline, skills } from './resume-items';
import PersonalNotes from './components/notes/PersonalNotes';
import './app.scss';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/resume" element={<Timeline events={combinedTimeline} skills={skills} />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/blog" element={<PersonalNotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;