import React from "react";
import { work } from "../../resume-items.ts";
import { Briefcase, MapPin, ExternalLink } from "lucide-react";
import "./experience.scss";

const ExperienceItem = ({ experience }) => (
  <div className="experience-item">
    <div className="experience-icon">
      <Briefcase size={24} />
    </div>
    <div className="experience-content">
      <h3 className="company">
        <a href={experience.Link} target="_blank" rel="noopener noreferrer">
          {experience.Company}
          <ExternalLink size={16} className="external-link-icon"/>
        </a>
      </h3>
      <p className="position">{experience.Position}</p>
      <p className="period">{experience.Period}</p>
      <p className="location">
        <MapPin size={16} className="location-icon"/>
        {experience.Location}
      </p>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-list">
        {work.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
}