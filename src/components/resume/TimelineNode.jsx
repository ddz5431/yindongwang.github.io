import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, ChevronRight, ChevronLeft } from 'lucide-react';
import { Skill, TimelineEventData } from '../../types';
import './TimelineNode.scss';

interface TimelineNodeProps {
  event: TimelineEventData;
  isExpanded: boolean;
  onClick: () => void;
  skills: Skill[];
}

const TimelineNode: React.FC<TimelineNodeProps> = ({
  event,
  isExpanded,
  onClick,
  skills,
}) => {
  const Icon = event.type === 'work' ? Briefcase : GraduationCap;

  const renderDetails = () => {
    const details = event.type === 'work' ? event.projects : event.courses;
    if (!details || details.length === 0) return null;

    return (
      <div className="details-container">
        <h4 className="section-title">
          {event.type === 'work' ? 'Projects' : 'Courses'}
        </h4>
        {details.map((item, index) => (
          <div key={index} className="detail-item">
            <h5 className="detail-title">{item.name}</h5>
            <p>{item.description}</p>
            <div className="detail-skills">
              {item.skills.slice(0, 5).map((skill, index) => (
                <span key={index} className="detail-skill">
                  {skill}
                </span>
              ))}
              {item.skills.length > 5 && (
                <span className="more-skills">
                  +{item.skills.length - 5}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`timeline-node ${event.type} ${isExpanded ? 'expanded' : ''}`}>
      <div className="timeline-node-content">
        <motion.div
          className="node-card"
          whileHover={{
            scale: 1.02,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}
          onClick={onClick}
        >
          <div className="node-header">
            <Icon className="icon" />
            <h3>{event.type === 'work' ? event.position : event.major}</h3>
            {event.type === 'education' && event.position && (
              <h4>{event.position}</h4>
            )}
          </div>
          <p className="organization">{event.type === 'work' ? event.company : event.university}</p>
          <p className="location">{event.location}</p>
          <p className="date">{`${event.startDate} - ${event.endDate || 'Present'}`}</p>
          <div className="skills-container">
            {event.skillIds.slice(0, 4).map((skillId) => {
              const skill = skills.find((s) => s.id === skillId);
              return skill ? (
                <span key={skillId} className="skill-tag">
                  {skill.name}
                </span>
              ) : null;
            })}
            {event.skillIds.length > 4 && (
              <span className="more-skills">
                +{event.skillIds.length - 4}
              </span>
            )}
          </div>
          {event.type === 'work' ? (
            <ChevronLeft className="expand-icon" />
          ) : (
            <ChevronRight className="expand-icon" />
          )}
        </motion.div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="expanded-content"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderDetails()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TimelineNode;