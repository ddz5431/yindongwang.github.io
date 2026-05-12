import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Timeline from './components/resume/Timeline';
import Publications from "./components/publications/Publications";
import Research from './components/research/Research';
import { combinedTimeline, skills } from './resume-items';
import PersonalNotes from './components/notes/PersonalNotes';
import Moments from './components/moments/Moments';
import './app.scss';

function AppContent() {
  const location = useLocation();
  console.log('Current path:', location.pathname);

  return (
    <>
      <Topbar />
      <div className="routes">
        <Routes>
            <Route path="" element={<Intro />} />
            <Route path="research" element={<Research />} />
            <Route path="publications" element={<Publications />} />
            <Route path="resume" element={<Timeline events={combinedTimeline} skills={skills} />} />
            <Route path="blog" element={<PersonalNotes />} />
            <Route path="moments" element={<Moments />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;