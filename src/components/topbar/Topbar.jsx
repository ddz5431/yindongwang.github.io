import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Person, Mail } from '@mui/icons-material';
import './topbar.scss';

const NAV_LINKS = [
  { to: '', label: 'Home', icon: '/home.svg' },
  { to: 'resume', label: 'Resume', icon: '/resume.svg' },
  { to: 'publications', label: 'Publications', shortLabel: 'Pubs', icon: '/publication.svg' },
  { to: 'research', label: 'Research', icon: '/research.svg' },
  { to: 'blog', label: 'Blog', icon: '/blog.svg' },
];

export default function Topbar() {
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(true);
  const lastY = useRef(0);

  const isActive = (to) => location.pathname === `/${to}`;

  // Mobile-only: hide the topbar when scrolling down, reveal when scrolling up.
  // Bottom nav mirrors that direction — visible while scrolling toward the top.
  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 1024;
      if (!isMobile) {
        if (hidden) setHidden(false);
        if (!bottomVisible) setBottomVisible(true);
        return;
      }
      const y = window.scrollY;
      if (y > lastY.current && y > 80) {
        setHidden(true);
        setBottomVisible(false);
      } else if (y < lastY.current) {
        setHidden(false);
        setBottomVisible(true);
      }
      lastY.current = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hidden, bottomVisible]);

  return (
    <>
      <header className={`topbar${hidden ? ' is-hidden' : ''}`}>
        <div className="wrapper">
          <Link to="" className="MyName">
            <span className="full-name">Ddz</span>
          </Link>
          {!isActive('') && <img src="/line.svg" alt="" className="name-line" />}
          <nav className="navLinks">
            {NAV_LINKS.map(({to, label, icon}) => (
              <Link
                key={to}
                to={to}
                className={`nav-link ${isActive(to) ? 'active' : ''} ${icon ? 'has-icon' : ''}`}
              >
                {icon && <img src={icon} alt={label} className="nav-icon" />}
                <span className="nav-label">{label}</span>
              </Link>
            ))}
          </nav>
          <div className="right">
            <div className="itemContainer">
              <Person className="icon" />
              <span>AI Researcher</span>
            </div>
            <div className="itemContainer">
              <a href="mailto:hi@yindong.me">
                <Mail className="icon"/>
                <span>hi@yindong.me</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <nav className={`mobile-bottom-nav${bottomVisible ? ' is-visible' : ''}`} aria-label="Primary navigation">
        {NAV_LINKS.map(({to, label, shortLabel, icon}) => (
          <Link
            key={to}
            to={to}
            className={`mbn-link ${isActive(to) ? 'active' : ''}`}
          >
            {icon && <img src={icon} alt="" className="mbn-icon" />}
            <span className="mbn-label">{shortLabel || label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}