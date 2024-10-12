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
      <div className="app">
        <Topbar />
        <div className="routes">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/Timeline" element={<Timeline events={combinedTimeline} skills={skills} />} />
            <Route path="/Publications" element={<Publications />} />
            <Route path="/PersonalNotes" element={<PersonalNotes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;