import React from 'react';
import './SkillBubble.scss';

interface SkillBubbleProps {
  skill: {
    id: string;
    name: string;
    category: string;
  };
  isHighlighted: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const SkillBubble: React.FC<SkillBubbleProps> = ({
  skill,
  isHighlighted,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`skill-bubble ${skill.category} ${isHighlighted ? 'highlighted' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {skill.name}
    </div>
  );
};

export default SkillBubble;