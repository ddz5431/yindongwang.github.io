import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { TimelineEventData } from '../../types';
import './TimelineEvent.scss';

interface TimelineEventProps {
  event: TimelineEventData;
  isHighlighted: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  event,
  isHighlighted,
  onMouseEnter,
  onMouseLeave,
}) => {
  const Icon = event.type === 'education' ? GraduationCap : Briefcase;

  const title = event.type === 'work' ? event.position : event.degree;
  const subtitle = event.type === 'work' ? event.company : event.university;

  return (
    <div
      id={`event-${event.id}`}
      className={`timeline-event ${event.type} ${isHighlighted ? 'highlighted' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="event-icon">
        <Icon size={24} />
      </div>
      <div className="event-content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <p className="event-date">
          {event.startDate} - {event.endDate || 'Present'}
        </p>
      </div>
    </div>
  );
};

export default TimelineEvent;