import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import './timeline.scss';

interface TimelineEventProps {
  type: 'education' | 'work';
  startDate: string;
  endDate?: string;
  title: string;
  subtitle: string;
  location: string;
  description?: string;
  link?: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  type,
  startDate,
  endDate,
  title,
  subtitle,
  location,
  description,
  link,
}) => {
  const Icon = type === 'education' ? GraduationCap : Briefcase;
  const dateDisplay = endDate ? `${startDate} - ${endDate}` : startDate;

  return (
    <motion.div
      className={`timeline-event ${type}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="timeline-icon">
        <Icon size={24} aria-hidden="true" />
      </div>
      <div className="timeline-content">
        <span className="timeline-date">{dateDisplay}</span>
        <h3 className="timeline-title">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <h4 className="timeline-subtitle">{subtitle}</h4>
        <p className="timeline-location">{location}</p>
        {description && <p className="timeline-description">{description}</p>}
      </div>
    </motion.div>
  );
};

export default TimelineEvent;
