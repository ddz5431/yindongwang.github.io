export interface WorkExperience {
  id: string;
  type: 'work';
  startDate: string;
  endDate: string;
  position: string;
  company: string;
  location: string;
  link: string;
  skillIds: string[];
  projects?: Project[];
}

export interface EducationBackground {
  id: string;
  type: 'education';
  startDate: string;
  endDate: string;
  major: string;
  degree: string;
  university: string;
  location: string;
  link: string;
  skillIds: string[];
  courses?: Course[];
  projects?: Project[];
}

export interface Skill {
  id: string;
  name: string;
  category: string;
}

export type TimelineEventData = WorkExperience | EducationBackground;

interface Project {
  name: string;
  description: string;
  skills: string[];
  personalResearch?: boolean;
}

interface Course {
  name: string;
  description?: string,
  skills?: string[];
  highlights?: string[];
}