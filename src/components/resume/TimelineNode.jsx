import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Skill, TimelineEventData } from '../../types';
import './TimelineNode.scss';

interface TimelineNodeProps {
  event: TimelineEventData;
  isExpanded: boolean;
  onClick: () => void;
  skills: Skill[];
  period: string;
}

const TimelineNode: React.FC<TimelineNodeProps> = ({
  event,
  isExpanded,
  onClick,
  skills,
  period,
}) => {
  const isPhD =
    (event.type === 'work' && event.position?.includes('Ph.D')) ||
    event.major?.includes('Ph.D');

  const renderDetails = () => {
    if (isPhD) {
      return renderResearchProjects();
    } else if (event.type === 'work') {
      return renderProjects();
    } else {
      return renderCourses();
    }
  };

  const renderProjects = () => {
    if (!event.projects || event.projects.length === 0) return null;

    return (
      <div className="details-container">
        <h4 className="section-title">🌟 Highlights</h4>
        {event.projects.map((project, index) => (
          <div key={index} className="detail-item">
            <h5 className="detail-title">{project.name}</h5>
            <p>{project.description}</p>
            <div className="detail-skills">
              {project.skills.slice(0, 5).map((skill, index) => (
                <span key={index} className="detail-skill">
                  {skill}
                </span>
              ))}
              {project.skills.length > 5 && (
                <span className="more-skills">+{project.skills.length - 5}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderResearchProjects = () => {
    const items = event.projects || event.courses;

    if (!items || items.length === 0) return null;

    return (
      <div className="research-interests">
        <h4 className="section-title">🧑‍🔬 Research Projects</h4>
        {event.projects.map((project, index) => (
          <div key={index} className="detail-item">
            <h5 className="detail-title">{project.name}</h5>
            <p>{project.description}</p>
            <div className="detail-skills">
              {project.skills.slice(0, 5).map((skill, index) => (
                <span key={index} className="detail-skill">
                  {skill}
                </span>
              ))}
              {project.skills.length > 5 && (
                <span className="more-skills">+{project.skills.length - 5}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderCourses = () => {
    if (!event.courses || event.courses.length === 0) return null;

    return (
      <div className="details-container">
        <h4 className="section-title">📝 Selected Courses</h4>
        <ul className="courses-list">
          {event.courses.map((course, index) => (
            <li key={index} className="course-item">
              {course.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div
      className={`timeline-node ${event.type} ${isPhD ? 'phd' : ''} ${
        isExpanded ? 'expanded' : ''
      }`}
    >
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
            <h3>{event.type === 'work' ? event.position : event.major}</h3>
            {event.type === 'education' && event.position && (
              <h4>{event.position}</h4>
            )}
          </div>
          <p className="organization">
            {event.type === 'work' ? event.company : event.university}
          </p>
          <p className="location"> 📍 {event.location}</p>
          <p className="date">
            {' '}
            📅 {`${event.startDate} - ${event.endDate || 'Present'}`}
          </p>
          <div className="skills-container">
            💪{' '}
            {event.skillIds.map((skillId) => {
              const skill = skills.find((s) => s.id === skillId);
              return skill ? (
                <span key={skillId} className="skill-tag">
                  {skill.name}
                </span>
              ) : null;
            })}
          </div>

          {event.type === 'work'? (
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
