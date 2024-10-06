import { WorkExperience, EducationBackground, Skill, TimelineEventData } from "./types";

export const work: WorkExperience[] = [
  {
    id: 'work-1',
    type: 'work',
    startDate: '01.2024',
    endDate: 'present',
    position: 'Doctoral Researcher',
    company: 'Hasso Plattner Institute',
    location: 'Potsdam, Germany',
    link: 'https://hpi.de',
    skillIds: ["s1", 's2', 's3', 's4', 's5'],
    projects: [
      {
        name: "AI-Assisted Code Generation",
        description: "Developing novel techniques for generating human-readable and efficient code using large language models.",
        skills: ["Python", "Large Language Models", "Software Engineering"]
      },
      {
        name: "Ethical AI Decision Making",
        description: "Researching methods to incorporate ethical considerations into AI decision-making processes.",
        skills: ["Machine Learning", "AI Ethics", "Python"]
      }
    ]
  },
  {
    id: 'work-2',
    type: 'work',
    startDate: '10.2021',
    endDate: '12.2023',
    position: 'NLP Engineer',
    company: 'MORESOPHY GmbH',
    location: 'Munich, Germany',
    link: 'https://www.moresophy.com/en',
    skillIds: ["s1", 's2'],
    projects: [
      {
        name: "Multilingual Sentiment Analysis Tool",
        description: "Developed a sentiment analysis tool capable of processing text in 10 different languages for customer feedback analysis.",
        skills: ["Python", "NLP", "Machine Learning", "Docker"]
      },
      {
        name: "Automated Document Classification System",
        description: "Created an AI-powered system to automatically classify and route internal documents, improving efficiency by 40%.",
        skills: ["Python", "Machine Learning", "NLP", "PyTorch"]
      }
    ]
  },
  {
    id: 'work-3',
    type: 'work',
    startDate: '05.2021',
    endDate: '10.2021',
    position: 'Student Data Analyst',
    company: 'BingoStar GmbH',
    location: 'Munich, Germany',
    link: 'https://www.lmu.de',
    skillIds: ["s1", 's2']
  },
  {
    id: 'work-4',
    type: 'work',
    startDate: '10.2019',
    endDate: '07.2021',
    position: 'Teaching Assistant',
    company: 'LMU Munich',
    location: 'Munich, Germany',
    link: 'https://www.lmu.de',
    skillIds: ["s1", 's2']
  },
];

export const education: EducationBackground[] = [
  {
    id: 'edu-1',
    type: 'education',
    startDate: '01.2024',
    endDate: 'present',
    major: 'AI and Intelligent Systems',
    degree: 'Ph.D.',
    university: 'Hasso Plattner Institute',
    location: 'Potsdam, Germany',
    link: 'https://hpi.de',
    skillIds: ["s1", 's2'],
    projects: [
      {
        name: "Explainable AI for Medical Diagnosis",
        description: "Researching methods to make AI-assisted medical diagnoses more transparent and interpretable for healthcare professionals.",
        skills: ["Python", "Machine Learning", "Deep Learning", "Healthcare AI"]
      }
    ]
  },
  {
    id: 'edu-2',
    type: 'education',
    startDate: '10.2019',
    endDate: '09.2021',
    major: 'Computational Linguistics',
    degree: 'Master of Science',
    university: 'LMU Munich',
    location: 'Munich, Germany',
    link: 'https://www.lmu.de',
    skillIds: ["s1", 's2'],
    projects: [
      {
        name: "Cross-lingual Transfer Learning for Low-resource Languages",
        description: "Developed a model to improve NLP task performance for languages with limited training data by leveraging knowledge from high-resource languages.",
        skills: ["Python", "NLP", "Machine Learning", "TensorFlow"]
      },
      {
        name: "Automated Essay Scoring System",
        description: "Created an AI-based system to automatically grade and provide feedback on student essays, focusing on coherence and argumentation.",
        skills: ["Python", "NLP", "Machine Learning", "NLTK"]
      }
    ]
  },
  {
    id: 'edu-3',
    type: 'education',
    startDate: '10.2018',
    endDate: '09.2019',
    major: 'Computational Linguistics',
    degree: 'Prerequisite Courses',
    university: 'LMU Munich',
    location: 'Munich, Germany',
    link: 'https://www.lmu.de',
    skillIds: ["s1", 's2']
  },
  {
    id: 'edu-4',
    type: 'education',
    startDate: '09.2014',
    endDate: '06.2018',
    major: 'German Language and Literature',
    degree: 'Bachelor of Arts',
    university: 'University of Anhui',
    location: 'Hefei, China',
    link: 'https://en.ahu.edu.cn/',
    skillIds: ["s1", 's2']
  },
  {
    id: 'edu-5',
    type: 'education',
    startDate: '10.2016',
    endDate: '08.2017',
    major: 'German Language and Literature',
    degree: 'Exchange Studies',
    university: 'University of Osnabrück',
    location: 'Osnabrück, Germany',
    link: 'https://www.uni-osnabrueck.de/',
    skillIds: ["s13", 's2', 's1']
  },
];

export const skills: Skill[] = [
  { id: 's1', name: 'Python', category: 'programming language' },
  { id: 's2', name: 'Machine Learning', category: 'ml' },
  { id: 's3', name: 'Team Leadership', category: 'soft' },
  { id: 's4', name: 'NLP', category: 'ml' },
  { id: 's5', name: 'Large Language Models', category: 'ml' },
  { id: 's6', name: 'Human-Centric AI', category: 'ml' },
  { id: 's7', name: 'Deep Learning', category: 'ml' },
  { id: 's8', name: 'Data Analysis', category: 'ml' },
  { id: 's9', name: 'Project Management', category: 'soft' },
  { id: 's10', name: 'Critical Thinking', category: 'soft' },
  { id: 's11', name: 'Collaboration', category: 'soft' },
  { id: 's12', name: 'Computer Vision', category: 'ml' },
  { id: 's13', name: 'Artificial Intelligence Ethics', category: 'ml' },
  { id: 's14', name: 'Problem Solving', category: 'soft' },
  { id: "s15", name: 'German', category: "language"}
];

function parseDateString(dateStr: string): string {
  if (['now', 'current', 'present'].includes(dateStr.toLowerCase())) {
    return new Date().toISOString().split('T')[0];
  }

  const [month, year] = dateStr.split('.');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toISOString().split('T')[0];
}

export const combinedTimeline: TimelineEventData[] = [
  ...work,
  ...education
].sort((a, b) => {
  const dateA = new Date(parseDateString(a.startDate)).getTime();
  const dateB = new Date(parseDateString(b.startDate)).getTime();
  return dateB - dateA; // Sort in descending order (most recent first)
});