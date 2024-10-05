import React from 'react';
import './SkillTag.scss';

interface SkillTagProps {
  skill: {
    id: string;
    name: string;
    category: string;
  };
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  const capitalizedName = skill.name.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');

  return (
    <span className={`skill-tag ${skill.category}`}>
      {capitalizedName}
    </span>
  );
};

export default SkillTag;