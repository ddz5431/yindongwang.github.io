import React, { useState } from 'react';
import TimelineNode from './TimelineNode';
import { Skill, TimelineEventData } from '../../types';
import './Timeline.scss';

interface TimelineProps {
  events: TimelineEventData[];
  skills: Skill[];
}

const Timeline: React.FC<TimelineProps> = ({ events, skills }) => {
  const [expandedNodes, setExpandedNodes] = useState<{ [key: string]: boolean }>(() => {
    return events.reduce((acc, event) => {
      acc[event.id] = true; // Set initial state to true for all nodes
      return acc;
    }, {} as { [key: string]: boolean });
  });

  const [areAllExpanded, setAreAllExpanded] = useState(true); // New state for tracking overall expansion

  const handleNodeClick = (id: string) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    setAreAllExpanded(
      Object.values({ ...expandedNodes, [id]: !expandedNodes[id] }).every(Boolean)
    );
  };

  const toggleAllNodes = () => {
    const newExpandedState = !areAllExpanded;
    setAreAllExpanded(newExpandedState);
    setExpandedNodes(
      events.reduce((acc, event) => {
        acc[event.id] = newExpandedState;
        return acc;
      }, {} as { [key: string]: boolean })
    );
  };

  const parseDate = (dateString: string): Date | null => {
    if (['now', 'current', 'present'].includes(dateString.toLowerCase())) {
      return new Date(); // Return current date for 'present'
    }

    const [monthName, yearStr] = dateString.split(' ');
    if (monthName && yearStr) {
      const month = new Date(`${monthName} 1, ${yearStr}`).getMonth();
      const year = parseInt(yearStr);
      if (!isNaN(month) && !isNaN(year)) {
        return new Date(year, month);
      }
    }
    return null;
  };

  const getYear = (dateString: string): string => {
    const date = parseDate(dateString);
    return date ? date.getFullYear().toString() : dateString.split(' ')[1] || 'Present';
  };

  const sortedEvents = [...events].sort((a, b) => {
    const dateA = parseDate(a.startDate);
    const dateB = parseDate(b.startDate);
    if (dateA && dateB) {
      return dateB.getTime() - dateA.getTime();
    } else if (dateA) {
      return -1;
    } else if (dateB) {
      return 1;
    } else {
      return 0;
    }
  });

  const getPeriod = (
    startDate: string,
    endDate: string
  ): 'past' | 'present' | 'future' => {
    const now = new Date();
    const start = parseDate(startDate);
    const end = parseDate(endDate);

    if (end && end < now) return 'past';
    if (start && start > now) return 'future';
    return 'present';
  };

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <div className="title-container">
          <h1>
            <span >Education & Experience</span>
          </h1>
        </div>
        {/*<button onClick={toggleAllNodes} className="toggle-all-button">*/}
        {/*  {areAllExpanded ? 'Collapse All' : 'Expand All'}*/}
        {/*</button>*/}
      </div>
      {sortedEvents.map((event, index) => {
        const period = getPeriod(event.startDate, event.endDate);
        return (
          <React.Fragment key={event.id}>
            {index >= 0 && (
              <div className="timeline-badge">
                <span className="badge-pill">{getYear(event.endDate)}</span>
              </div>
            )}
            <div className={`timeline-line ${period}`}></div>
            <TimelineNode
              key={event.id}
              event={event}
              isExpanded={expandedNodes[event.id]}
              onClick={() => handleNodeClick(event.id)}
              skills={skills}
              period={period}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Timeline;
