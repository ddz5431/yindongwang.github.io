import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigationType } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Timeline from './components/resume/Timeline';
import Publications from "./components/publications/Publications";
import Research from './components/research/Research';
import { combinedTimeline, skills } from './resume-items';
import PersonalNotes from './components/notes/PersonalNotes';
import BlogPost from './components/notes/BlogPost';
import Moments from './components/moments/Moments';
import './app.scss';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // POP = browser back/forward (or navigate(-1)) — let the browser restore scroll.
    // Skip when the URL has a hash; the target page handles scrollIntoView itself.
    if (navType === 'POP' || hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash, navType]);

  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <div className="routes">
        <Routes>
            <Route path="" element={<Intro />} />
            <Route path="research" element={<Research />} />
            <Route path="publications" element={<Publications />} />
            <Route path="resume" element={<Timeline events={combinedTimeline} skills={skills} />} />
            <Route path="blog" element={<PersonalNotes />} />
            <Route path="blog/:slug" element={<BlogPost />} />
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