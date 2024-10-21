import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Person, Mail } from '@mui/icons-material';
import './topbar.scss';

const NAV_LINKS = [
  { to: '', label: 'Home' },
  { to: 'resume', label: 'Resume' },
  { to: 'blog', label: 'Blog' },
  { to: 'publications', label: 'Publications' }
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
          <span className="full-name">Yindong Wang</span>
          <span className="chinese-name"> - 王殷冬</span>
        </Link>
        <nav className="navLinks">
          {NAV_LINKS.map(({to, label}) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${isActive(to) ? 'active' : ''}`}
              onClick={() => handleClick(to)}
            >
              {label}
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