import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, ChevronRight, ChevronLeft } from 'lucide-react';
import { Brain, TrendingUp, Heart } from 'lucide-react';
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
    period: string,
}) => {
  // const Icon = event.type === 'work' ? Briefcase : GraduationCap;

  // const getInterestIcon = (name: string) => {
  //   switch (name) {
  //     case 'LLM Alignment with Human Values':
  //       return <Brain size={20} />;
  //     case 'Preference Learning':
  //       return <TrendingUp size={20} />;
  //     case 'AI for Social Good':
  //       return <Heart size={20} />;
  //     case 'AI for Education':
  //       return <GraduationCap size={20} />;
  //     default:
  //       return null;
  //   }
  // };


  const renderDetails = () => {
    if (event.type === 'work') {
      return renderProjects();
    } else if (event.major?.includes('Ph.D')) {
      return renderResearchProjects();
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
                <span className="more-skills">
                  +{project.skills.length - 5}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderResearchProjects = () => {
    if (!event.courses || event.courses.length === 0) return null;

    const researchDescriptions = {
      'LLM Alignment with Human Values': 'Exploring methods to ensure large language models behave consistently with human ethics and values.',
      'Preference Learning': 'Investigating algorithms and models that can learn and predict human preferences from various types of feedback.',
      'AI for Social Good': 'Developing AI applications aimed at addressing pressing societal challenges like sustainability and public health.',
      'AI for Education': 'Researching how AI can enhance learning experiences and educational outcomes through adaptive systems.'
    };

    return (
      <div className="research-interests">
        <h4 className="section-title">🧑‍🔬 Research Interests</h4>
        <div className="interests-grid">
          {event.courses.map((course, index) => (
            <motion.div
              key={index}
              className="interest-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="content">
                <div className="interest-header">
                  <h5 className="interest-name">{course.name}</h5>
                  {/*{getInterestIcon(course.name)}*/}
                </div>
                <p className="interest-description">{researchDescriptions[course.name] || course.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
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
            {/*<Icon className="icon" />*/}
            <h3>{event.type === 'work' ? event.position : event.major}</h3>
            {event.type === 'education' && event.position && (
              <h4>{event.position}</h4>
            )}
          </div>
          <p className="organization">{event.type === 'work' ? event.company : event.university}</p>
          <p className="location"> 📍 {event.location}</p>
          <p className="date"> 📅 {`${event.startDate} - ${event.endDate || 'Present'}`}</p>
          <div className="skills-container">
            💪 {event.skillIds.slice(0, 4).map((skillId) => {
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