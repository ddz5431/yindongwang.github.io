import React from 'react';
import { skills } from '../../resume-items';
import './skills.scss';

const SkillsSection: React.FC = () => (
  <section className="skills" id="skills">
    <h2 className="section-title">Skills</h2>
    <div className="skills-list">
      {skills.map((skillCategory, index) => (
        <div key={index} className="skill-category">
          <h3 className="skill-category-title">{skillCategory.category}</h3>
          <ul className="skill-items">
            {skillCategory.items.map((item, itemIndex) => (
              <li key={itemIndex} className="skill-item">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
