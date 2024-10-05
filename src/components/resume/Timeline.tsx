import React from 'react';
import { motion } from 'framer-motion';
import { work, education } from '../../resume-items';
import TimelineNode from './TimelineNode';
import './Timeline.scss';

const Timeline: React.FC = () => {
  return (
    <div className="timeline-container">
      <motion.div
        className="growth-line"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: '100%', opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <div className="timeline-content">
        <div className="work-column">
          {work.map((event, index) => (
            <TimelineNode
              key={event.id}
              event={event}
              isLeft={true}
              isCurrent={index === 0}
              total={work.length}
              index={index}
            />
          ))}
        </div>
        <div className="education-column">
          {education.map((event, index) => (
            <TimelineNode
              key={event.id}
              event={event}
              isLeft={false}
              isCurrent={index === 0}
              total={education.length}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;