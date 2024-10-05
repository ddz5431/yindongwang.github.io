import React from 'react';
import './CallToAction.scss';

const CallToAction: React.FC = () => {
  return (
    <section className="call-to-action">
      <a href="mailto:hi@yindong.me" className="cta-button">Reach Out</a>
      <a href="/path-to-pdf-resume.pdf" download className="cta-button">Download PDF Resume</a>
    </section>
  );
};

export default CallToAction;