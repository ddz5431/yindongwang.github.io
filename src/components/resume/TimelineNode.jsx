import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import './TimelineNode.scss';

const TimelineNode = ({
  event,
  isExpanded,
  onClick,
  skills,
  period,
  index,
  totalCount,
}) => {
  const [highlightedSkills, setHighlightedSkills] = useState([]); // set when a PROJECT is hovered — drives tag highlighting
  const [hoveredTagSkill, setHoveredTagSkill] = useState(null);   // set when a TAG is hovered — drives project highlighting

  const isPhD =
    (event.type === 'work' && event.position?.includes('Ph.D')) ||
    event.major?.includes('Ph.D');

  const renderDetails = () => {
    if (isPhD) return renderResearchHighlights();
    if (event.type === 'work') return renderProjects();
    return renderCourses();
  };

  const renderProjects = () => {
    if (!event.projects || event.projects.length === 0) return null;
    return (
      <div className="nd-details">
        <h4 className="nd-details-title">Highlights</h4>
        <div className="nd-project-cards">
          {event.projects.map((project, idx) => {
            const matches =
              hoveredTagSkill !== null &&
              project.highlightSkills?.includes(hoveredTagSkill);
            const dimmed = hoveredTagSkill !== null && !matches;
            const cardCls = `nd-project-card${matches ? ' nd-project-card-highlighted' : ''}${dimmed ? ' nd-project-card-dimmed' : ''}`;
            return (
            <motion.div
              key={idx}
              className={cardCls}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <div className="nd-project-name">
                {project.publicationId ? (
                  <Link
                    to={`/publications#${project.publicationId}`}
                    className="nd-project-link"
                    onClick={e => e.stopPropagation()}
                  >
                    {project.name}
                  </Link>
                ) : (
                  project.name
                )}
              </div>
              <div className="nd-project-desc">{project.description}</div>
              {project.comingSoon && (
                <div className="nd-coming-soon">Paper to appear soon</div>
              )}
            </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderResearchHighlights = () => {
    if (!event.projects || event.projects.length === 0) return null;
    return (
      <div className="nd-details">
        <h4 className="nd-details-title">Projects</h4>
        <div className="nd-project-cards">
          {event.projects.map((project, idx) => {
            const matches =
              hoveredTagSkill !== null &&
              project.highlightSkills?.includes(hoveredTagSkill);
            const dimmed = hoveredTagSkill !== null && !matches;
            const cardCls = `nd-project-card${matches ? ' nd-project-card-highlighted' : ''}${dimmed ? ' nd-project-card-dimmed' : ''}`;
            return (
            <motion.div
              key={idx}
              className={cardCls}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              onMouseEnter={() => project.highlightSkills && setHighlightedSkills(project.highlightSkills)}
              onMouseLeave={() => setHighlightedSkills([])}
            >
              <div className="nd-project-name">
                {project.publicationId ? (
                  <Link
                    to={`/publications#${project.publicationId}`}
                    className="nd-project-link"
                    onClick={e => e.stopPropagation()}
                  >
                    {project.name}
                  </Link>
                ) : (
                  project.name
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="nd-paper-link" onClick={e => e.stopPropagation()}>
                    [Paper]
                  </a>
                )}
              </div>
              <div className="nd-project-desc">{project.description}</div>
              {project.comingSoon && (
                <div className="nd-coming-soon">Paper to appear soon</div>
              )}
            </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderCourses = () => {
    if (!event.courses || event.courses.length === 0) return null;
    return (
      <div className="nd-details">
        <h4 className="nd-details-title">Selected Courses</h4>
        <ul className="nd-details-list nd-courses">
          {event.courses.map((course, idx) => (
            <li key={idx}>{course.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  const title = event.type === 'work' ? event.position : event.major;
  const organization = event.type === 'work' ? event.company : event.university;
  const hasExpandableContent = (event.projects?.length > 0 || event.courses?.length > 0);

  return (
    <div className="nd-entry" onClick={hasExpandableContent ? onClick : undefined}>
      <h3 className="nd-title">
        {event.type === 'education'
          ? <GraduationCap className="nd-title-icon nd-title-icon-edu" size={18} />
          : <Briefcase className="nd-title-icon nd-title-icon-work" size={18} />}
        {title}
        {hasExpandableContent && (
          <span className={`nd-chevron ${isExpanded ? 'open' : ''}`}>›</span>
        )}
      </h3>
      <p className="nd-org">
        {event.link ? (
          <a href={event.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
            {organization}
          </a>
        ) : organization}
      </p>
      {event.type === 'education' && event.advisor && (
        <p className="nd-advisor">
          Supervisor:{' '}
          {event.advisorLink ? (
            <a href={event.advisorLink} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
              {event.advisor}
            </a>
          ) : event.advisor}
        </p>
      )}

      {isPhD && <div className="nd-tags">
        <span className="nd-tags-label">Research Interests:</span>
        {event.skillIds.map((skillId) => {
          const skill = skills.find((s) => s.id === skillId);
          if (!skill) return null;
          const linkMap = {
            'LLM Alignment': '/research#llm-alignment',
            'LLM Evaluation': '/research#llm-evaluation',
            'LLM Reasoning': '/research#llm-reasoning',
          };
          const href = linkMap[skill.name];
          const isHighlighted = highlightedSkills.includes(skillId);
          const isDimmed = highlightedSkills.length > 0 && !isHighlighted;
          const cls = `nd-tag ${event.type} ${isHighlighted ? 'nd-tag-highlighted' : ''} ${isDimmed ? 'nd-tag-dimmed' : ''}`;
          return href ? (
            <Link
              key={skillId}
              to={href}
              state={{ from: 'resume' }}
              className={`${cls} nd-tag-link`}
              onClick={e => e.stopPropagation()}
              onMouseEnter={() => setHoveredTagSkill(skillId)}
              onMouseLeave={() => setHoveredTagSkill(null)}
            >
              {skill.name}
            </Link>
          ) : (
            <span
              key={skillId}
              className={cls}
              onMouseEnter={() => setHoveredTagSkill(skillId)}
              onMouseLeave={() => setHoveredTagSkill(null)}
            >
              {skill.name}
            </span>
          );
        })}
      </div>}

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflowY: 'clip', overflowX: 'visible' }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ paddingBottom: 30 }}>
              {renderDetails()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TimelineNode;
