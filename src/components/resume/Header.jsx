import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="resume-header">
      <h1>Yindong Wang</h1>
      <p className="professional-title">NLP Enthusiast | Machine Learning Researcher</p>
      <p className="contact-info">hi@yindong.me | LinkedIn: yindongwang</p>
    </header>
  );
};

export default Header;