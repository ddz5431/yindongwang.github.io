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
}

export interface EducationBackground extends BaseEvent {
  type: 'education';
  major: string;
  degree: string;
  university: string;
}

export type TimelineEventData = WorkExperience | EducationBackground;

export interface Skill {
  id: string;
  name: string;
  category: string;
}