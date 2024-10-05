export interface TimelineEvent {
  type: 'education' | 'work';
  startDate: string;
  endDate?: string; // Made endDate optional
  title: string;
  subtitle: string;
  location: string;
  description?: string;
  link?: string;
}

export interface WorkExperience {
  position: string;
  startDate: string;
  endDate?: string; // Made endDate optional
  company: string;
  location: string;
  link: string;
}

export interface EducationBackground {
  university: string;
  startDate: string;
  endDate?: string; // Made endDate optional
  major: string;
  degree: string;
  grade?: string;
  location: string;
  link: string;
}

export const work: WorkExperience[] = [
  {
    startDate: '01.2024',
    endDate: 'present', // Updated to 'present' for clarity
    position: 'PhD Candidate',
    company: 'Hasso Plattner Institute',
    location: 'Potsdam, Germany',
    link: 'https://hpi.de',
  },
  {
    startDate: '10.2021',
    endDate: '12.2023',
    position: 'NLP Engineer',
    company: 'MORESOPHY GmbH',
    location: 'Munich, Germany',
    link: 'https://www.moresophy.com/en',
  },
  {
    startDate: '05.2021',
    endDate: '10.2021',
    position: 'Student Data Analyst',
    company: 'BingoStar GmbH',
    location: 'Munich, Germany',
    link: 'https://www.lmu.de',
  },
  {
    startDate: '10.2019',
    endDate: '07.2021',
    position: 'Teaching Assistant',
    company: 'LMU',
    location: 'Munich, Germany',
    link: 'https://www.lmu.de',
  },
];

export const education: EducationBackground[] = [
  {
    startDate: '01.2024',
    endDate: 'present',
    major: 'Artificial Intelligence and Intelligent Systems',
    degree: 'Ph.D.',
    university: 'Hasso Plattner Institute',
    location: 'Potsdam, Germany',
    link: 'https://hpi.de',
  },
  {
    startDate: '10.2019',
    endDate: '09.2021',
    major: 'Computational Linguistics, minored in Computer Science',
    degree: 'Master of Science',
    university: 'LMU Munich',
    location: 'Munich, Germany',
    link: 'https://www.lmu.de',
  },
  {
    startDate: '10.2018',
    endDate: '09.2019',
    major: 'Computational Linguistics',
    degree: 'Prerequisite Courses',
    university: 'LMU Munich',
    location: 'Munich, Germany',
    link: 'https://www.lmu.de',
  },
  {
    startDate: '09.2014',
    endDate: '06.2018',
    major: 'German Language and Literature',
    degree: 'Bachelor of Arts',
    university: 'University of Anhui',
    location: 'Hefei, China',
    link: 'https://en.ahu.edu.cn/',
  },
  {
    startDate: '10.2016',
    endDate: '08.2017',
    major: 'German Language and Literature',
    degree: 'Exchange Studies',
    university: 'University of Osnabrück',
    location: 'Osnabrück, Germany',
    link: 'https://www.uni-osnabrueck.de/',
  },
];

function parseDateString(dateStr: string): string {
  if (['now', 'current', 'present'].includes(dateStr.toLowerCase())) {
    return new Date().toISOString().split('T')[0];
  }

  const [month, year] = dateStr.split('.');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toISOString().split('T')[0];
}

export const combinedTimeline: TimelineEvent[] = [
  ...work.map((workExp) => ({
    type: 'work' as const,
    startDate: parseDateString(workExp.startDate),
    endDate: workExp.endDate ? parseDateString(workExp.endDate) : undefined,
    title: workExp.position,
    subtitle: workExp.company,
    location: workExp.location,
    link: workExp.link,
  })),
  ...education.map((edu) => ({
    type: 'education' as const,
    startDate: parseDateString(edu.startDate),
    endDate: edu.endDate ? parseDateString(edu.endDate) : undefined,
    title: `${edu.degree} in ${edu.major}`,
    subtitle: edu.university,
    location: edu.location,
    link: edu.link,
  })),
].sort((a, b) => {
  const dateA = new Date(a.startDate).getTime();
  const dateB = new Date(b.startDate).getTime();
  return dateB - dateA; // Sort in descending order (most recent first)
});
