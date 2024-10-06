export type Project = {
  name: string;
  description: string;
  skills: string[];
};

export interface BaseEvent {
  id: string;
  type: 'work' | 'education';
  startDate: string;
  endDate?: string;
  location: string;
  link: string;
  skillIds: string[];
}

export interface WorkExperience extends BaseEvent {
  type: 'work';
  position: string;
  company: string;
  projects?: Project[];
}

export interface EducationBackground extends BaseEvent {
  type: 'education';
  major: string;
  degree: string;
  university: string;
  projects?: Project[];
}

export type TimelineEventData = WorkExperience | EducationBackground;

export interface Skill {
  id: string;
  name: string;
  category: string;
}

