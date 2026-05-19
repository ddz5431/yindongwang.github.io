import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Person, Mail } from '@mui/icons-material';
import './topbar.scss';

const NAV_LINKS = [
  { to: '', label: 'Home', icon: '/home.svg' },
  { to: 'resume', label: 'Resume', icon: '/resume.svg' },
  { to: 'publications', label: 'Publications', icon: '/publication.svg' },
  { to: 'research', label: 'Research', icon: '/research.svg' },
  { to: 'blog', label: 'Blog', icon: '/blog.svg' },
];

export default function Topbar() {
  const location = useLocation();

  const isActive = (to) => location.pathname === `/${to}`;

  const handleClick = (to) => {
    console.log('Link clicked:', to);
  };

  return (
    <header className="topbar">
      <div className="wrapper">
        <Link to="" className="MyName" onClick={() => handleClick('')}>
          <span className="full-name">Ddz</span>
        </Link>
        {!isActive('') && <img src="/line.svg" alt="" className="name-line" />}
        <nav className="navLinks">
          {NAV_LINKS.map(({to, label, icon}) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${isActive(to) ? 'active' : ''} ${icon ? 'has-icon' : ''}`}
              onClick={() => handleClick(to)}
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
  );
}