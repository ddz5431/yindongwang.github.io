import React from 'react';
import Header from './Header';
import Timeline from './Timeline';
import SkillsSection from './SkillsSection';
import CallToAction from './CallToAction';
import './Resume.scss';

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <Header />
      <Timeline />
      <SkillsSection />
      <CallToAction />
    </div>
  );
};

export default Resume;