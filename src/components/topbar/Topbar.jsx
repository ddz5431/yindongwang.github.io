import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Person, Mail } from '@mui/icons-material';
import './topbar.scss';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/timeline', label: 'Resume' },
  { to: '/personal-notes', label: 'Personal Notes' },
  { to: '/publications', label: 'Publications' }
];

export default function Topbar() {
  const location = useLocation();

  return (
    <header className="topbar">
      <div className="wrapper">
        <Link to="/" className="MyName">Yindong Wang - 王殷冬</Link>
        <nav className="navLinks">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${location.pathname === to ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="right">
          <div className="itemContainer">
            <Person className="icon" />
            <span>AI Enthusiast</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>hi@yindong.me</span>
          </div>
        </div>
      </div>
    </header>
  );
}