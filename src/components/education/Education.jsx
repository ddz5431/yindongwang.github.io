import React from "react";
import { EDUCATION } from "../../resume-items.ts";
import { School, MapPin, ExternalLink } from "lucide-react";
import "./education.scss";

const EducationItem = ({ education }) => (
  <div className="education-item">
    <div className="education-icon">
      <School size={24} />
    </div>
      <div className="education-content">
          <h3 className="school">
              <a href={education.Link} target="_blank" rel="noopener noreferrer">
                  {education.University}
                  <ExternalLink size={16} className="external-link-icon"/>
              </a>
          </h3>
          <p className="degree">{education.Degree} in {education.Major}</p>
          <p className="date">{education.Period}</p>
          <p className="location">
              <MapPin size={16} className="location-icon"/>
              {education.Location}
          </p>
          {education.GPA &&
              <p className="gpa">GPA: {education.GPA}</p>}
      </div>
  </div>
);

export default function Education() {
    return (
        <section className="education" id="education">
        <h2 className="section-title">Education</h2>
      <div className="education-list">
        {EDUCATION.map((edu, index) => (
          <EducationItem key={index} education={edu} />
        ))}
      </div>
    </section>
  );
}