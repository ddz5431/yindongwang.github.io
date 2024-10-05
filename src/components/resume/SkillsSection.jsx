import React from 'react';
import { skills } from '../../resume-items';
import './SkillsSection.scss';

const SkillsSection: React.FC = () => {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section className="skills-section">
      <h2>Skills</h2>
      {categories.map(category => (
        <div key={category} className="skill-category">
          <h3>{category}</h3>
          <div className="skill-list">
            {skills
              .filter(skill => skill.category === category)
              .map(skill => (
                <div key={skill.id} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: `${skill.proficiency}%` }}></div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;