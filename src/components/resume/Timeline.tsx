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

  // Sort events by start date, most recent first
  const sortedEvents = [...events].sort((a, b) =>
    new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <div className="timeline-container">
      <div className="timeline-line education"></div>
      <div className="timeline-line work"></div>
      {sortedEvents.map((event, index) => (
        <TimelineNode
          key={event.id}
          event={event}
          isExpanded={expandedNodes[event.id]}
          onClick={() => handleNodeClick(event.id)}
          skills={skills}
        />
      ))}
    </div>
  );
};

export default Timeline;