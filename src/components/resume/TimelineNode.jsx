import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import SkillTag from './SkillTag';
import { TimelineEventData } from '../../types';
import { skills } from '../../resume-items';
import './TimelineNode.scss';

interface TimelineNodeProps {
  event: TimelineEventData;
  isLeft: boolean;
  isCurrent: boolean;
  total: number;
  index: number;
}

const TimelineNode: React.FC<TimelineNodeProps> = ({ event, isLeft, isCurrent, total, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = event.type === 'work' ? Briefcase : GraduationCap;

  const lineThickness = 2 + (index / total) * 4; // Varies from 2px to 6px

  return (
    <motion.div
      className={`timeline-node ${isLeft ? 'left' : 'right'} ${isCurrent ? 'current' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="node-content"
        whileHover={{ scale: 1.03 }}
        style={{ cursor: 'pointer' }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Icon className="icon" />
        <h3>{event.position || event.major}</h3>
        <p>{event.company || event.university}</p>
        <p className="date">{`${event.startDate} - ${event.endDate || 'Present'}`}</p>
        <div className="skills-container">
          {event.skillIds.slice(0, 3).map(skillId => {
            const skill = skills.find(s => s.id === skillId);
            return skill ? (
              <SkillTag key={skillId} skill={skill} />
            ) : null;
          })}
          {event.skillIds.length > 3 && <span className="more-skills">+{event.skillIds.length - 3}</span>}
        </div>
        {isExpanded ? <ChevronUp className="expand-icon" /> : <ChevronDown className="expand-icon" />}
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="expanded-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{event.description}</p>
            <div className="all-skills">
              {event.skillIds.map(skillId => {
                const skill = skills.find(s => s.id === skillId);
                return skill ? (
                  <SkillTag key={skillId} skill={skill} />
                ) : null;
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`connecting-line ${isLeft ? 'right' : 'left'}`}
        style={{ width: `${isLeft ? lineThickness : 20}px`, height: `${isLeft ? 2 : lineThickness}px` }}
      />
    </motion.div>
  );
};

export default TimelineNode;