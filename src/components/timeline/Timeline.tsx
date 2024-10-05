import React from 'react';
import TimelineEvent from './TimelineEvent';
import { combinedTimeline } from '../../resume-items';
import './timeline.scss';

const Timeline: React.FC = () => {
  return (
    <div className="timeline">
      {combinedTimeline.map((event, index) => (
        <TimelineEvent key={index} {...event} />
      ))}
    </div>
  );
};

export default Timeline;