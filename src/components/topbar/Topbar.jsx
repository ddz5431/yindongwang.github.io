import React, { useEffect, useState } from 'react';
import { Person, Mail } from '@material-ui/icons';
import './topbar.scss';

const NAV_LINKS = [
  { to: 'intro', label: 'Home' },
  { to: 'education', label: 'Education' },
  { to: 'experience', label: 'Experience' },
  { to: 'contact', label: 'Contact' },
];

export default function Topbar() {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_LINKS.forEach(({ to }) => {
      const element = document.getElementById(to);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className="topbar">
      <div className="wrapper">
        <a href="#intro" className="MyName" onClick={(e) => handleClick(e, 'intro')}>Yindong Wang</a>
        <nav className="navLinks">
          {NAV_LINKS.map(({ to, label }) => (
            <a
              key={to}
              href={`#${to}`}
              className={`nav-link ${activeSection === to ? 'active' : ''}`}
              onClick={(e) => handleClick(e, to)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="right">
          <div className="itemContainer">
            <Person className="icon" />
            <span>NLP Enthusiast</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>yindong.wang@protonmail.com</span>
          </div>
        </div>
      </div>
    </header>
  );
}