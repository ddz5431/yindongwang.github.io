import React from 'react';
import { education } from '../../resume-items';
import { School, MapPin, ExternalLink } from 'lucide-react';
import './education.scss';
import App from "../../App";

interface EducationItemProps {
  education: {
    University: string;
    Link: string;
    Degree: string;
    Major: string;
    Period: string;
    Location: string;
    GPA?: string;
  };
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => (
  <div className="education-item">
    <div className="education-icon">
      <School size={24} aria-hidden="true" />
    </div>
    <div className="education-content">
      <h3 className="school">
        <a href={education.Link} target="_blank" rel="noopener noreferrer">
          {education.University}
          <ExternalLink size={16} className="external-link-icon" aria-hidden="true" />
        </a>
      </h3>
      <p className="degree">
        {education.Degree} in {education.Major}
      </p>
      <p className="date">{education.Period}</p>
      <p className="location">
        <MapPin size={16} className="location-icon" aria-hidden="true" />
        {education.Location}
      </p>
      {education.GPA && <p className="gpa">GPA: {education.GPA}</p>}
    </div>
  </div>
);

const Education: React.FC = () => (
  <section className="education" id="education">
    <h2 className="section-title">Education</h2>
    <div className="education-list">
      {education.map((edu, index) => (
        <EducationItem key={index} education={edu} />
      ))}
    </div>
  </section>
);

export default Education;