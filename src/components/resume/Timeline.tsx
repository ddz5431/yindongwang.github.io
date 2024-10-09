import React, { useState } from 'react';
import TimelineNode from './TimelineNode';
import { Skill, TimelineEventData } from '../../types';
import './Timeline.scss';

interface TimelineProps {
  events: TimelineEventData[];
  skills: Skill[];
}

const Timeline: React.FC<TimelineProps> = ({ events, skills }) => {
  const [expandedNodes, setExpandedNodes] = useState<{ [key: string]: boolean }>({});

  const handleNodeClick = (id: string) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const parseDate = (dateString: string): Date | null => {
    const parts = dateString.split('.');
    if (parts.length === 2) {
      const [month, year] = parts;
      return new Date(parseInt(year), parseInt(month) - 1);
    }
    return null;
  };

  const getYear = (dateString: string): string => {
    const date = parseDate(dateString);
    return date ? date.getFullYear().toString() : dateString.split('.')[1] || 'Present';
  };

  const sortedEvents = [...events].sort((a, b) => {
    const dateA = parseDate(a.startDate);
    const dateB = parseDate(b.startDate);
    if (dateA && dateB) {
      return dateB.getTime() - dateA.getTime();
    }
    return 0;
  });

  return (
    <div className="timeline-container">
      {sortedEvents.map((event, index) => (
          <React.Fragment key={event.id}>
          {index > 0 && (
            <div className="timeline-badge">
              <span className="badge-pill">{getYear(event.endDate)}</span>
            </div>
          )}
      <div className="timeline-line education"></div>

      <div className="timeline-line work"></div>
        <TimelineNode
          key={event.id}
          event={event}
          isExpanded={expandedNodes[event.id]}
          onClick={() => handleNodeClick(event.id)}
          skills={skills}
        /></React.Fragment>
      ))}
    </div>
  );
};

export default Timeline;