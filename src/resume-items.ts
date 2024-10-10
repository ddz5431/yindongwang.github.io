import { WorkExperience, EducationBackground, Skill, TimelineEventData } from "./types";

export const work: WorkExperience[] = [
  {
    id: 'work-1',
    type: 'work',
    startDate: '01.2024',
    endDate: 'present',
    position: 'AI Researcher',
    company: 'Hasso Plattner Institute',
    location: 'Potsdam, Germany',
    link: 'https://hpi.de',
    skillIds: ["s1", 's2', 's3', 's4', 's5'],
    projects: [
      {
        name: "Paper: Entailment Few-shot Learning with Large Language Models",
        description: "This study explores few-shot learning with pretrained language models using a textual entailment-based framework, achieving performance improvements across model architectures without relying on external NLI data.",
        skills: ["Large Language Models", "Entailment Few-shot Learning", "Efficient LLMs downstream application", "Natural Language Processing"]
      },
      {
        name: "Master Project: Facts Matter - Benchmark LLMs' hallucination detection and mitigation abilities",
        description: "Supervised Master Project on LLM hallucinations (Summer 2024).",
        skills: ["Project Supervision", "LLM Hallucinations"]
      },
      {
        name: "Master Seminar: MetaImage - Decoding Languages from Visual Metaphors",
        description: "Supervised Research Seminar: Trends in AI and Deep Learning Research Seminar\n" +
            "(Summer 2024).\n ",
        skills: ["Diffusion Models", "Multilinguality", "Project Supervision"]
      },
      // {
      //   name: "Young women in AI workshop",
      //   description: "",
      //   skills: ["Workshp"]
      // }
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
        name: "Transformer-based NLP Pipeline Transition",
        description: "Spearheaded the transition from traditional ML pipelines to transformer-based architectures for advanced text analysis tasks (NER, summarization, classification), significantly enhancing multilingual capabilities and model performance.",
        skills: ["NLP", "Transformer Models", "Machine Learning", "Python"]
      },
      {
        name: "Elasticsearch Integration for NLP Infrastructure",
        description: "Integrated Elasticsearch to optimize data retrieval and indexing, creating a more efficient and scalable NLP infrastructure.",
        skills: ["Elasticsearch", "Data Indexing", "NLP", "Database Optimization"]
      },
      {
        name: "ML Model Deployment and API Development",
        description: "Containerized and orchestrated ML model deployments using Kubernetes, developed high-performance APIs with FastAPI for model serving; monitored ML training with MLFlow and Wandb.",
        skills: ["Kubernetes", "FastAPI", "MLFlow", "Wandb", "DevOps", "API Development"]
      }
    ]
  },
  {
    id: 'work-3',
    type: 'work',
    startDate: '05.2021',
    endDate: '10.2021',
    position: 'Data Analyst',
    company: 'BingoStar GmbH',
    location: 'Munich, Germany',
    link: 'https://www.lmu.de',
    skillIds: ["s1", 's2'],
    projects: [
      {
        name: "Sales Data Automation & Trend Analysis",
        description: "Developed an automated system to generate sales tables for various product categories from diverse types of receipts. Conducted data analysis to identify shopping trends for an Asia market, optimizing product categorization and marketing strategies.",
        skills: ["Data Automation", "SQL", "Data Analysis"]
      }
    ]
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
    skillIds: ["s1", 's2'],
    projects: [
      {
        name: "Computational Linguistics Course Assistance",
        description: "Held weekly tutorials, providing guidance on programming in Computational Linguistics. Evaluated student assignments and provided constructive feedback to enhance learning outcomes.",
        skills: ["Teaching", "Computational Linguistics", "Programming", "Student Evaluation"]
      }
    ]
  },
];

export const education: EducationBackground[] = [
  {
    id: 'edu-1',
    type: 'education',
    startDate: '01.2024',
    endDate: 'present',
    major: ' Ph.D in AI and Intelligent Systems',
    degree: 'Ph.D.',
    university: 'Hasso Plattner Institute',
    location: 'Potsdam, Germany',
    link: 'https://hpi.de',
    skillIds: ["s1", 's2'],
    courses: [
      {
        name: "LLM Alignment with Human Values",
        highlights: [], /*"RLHF", "AI Agent"*/
        description: ""
      },
      {
        name: "Preference Learning",
        description: "",
        highlights: []
      },
      // {
      //   name: "Efficient LLM Adaptation for downstream NLP tasks",
      //   description: "",
      //   highlights: []
      // },
      {
        name: "AI for Social Good",
        description: "",
        highlights: []
      },
      {
        name: "AI for Education",
        description: "",
        highlights: []
      }
    ]
  },
  {
    id: 'edu-2',
    type: 'education',
    startDate: '10.2019',
    endDate: '09.2021',
    major: 'MSc. in Computational Linguistics and CS',
    degree: 'Master of Science',
    university: 'LMU Munich',
    location: 'Munich, Germany',
    link: 'https://www.lmu.de',
    skillIds: ["s1", 's2'],
    courses: [
      {
        name: "Deep Learning For NLP",
      },
      {
        name: "Knowledge Discovery in Databases I",
      },
      {
        name: "Lexikon, Syntax, Semantik"
      },
      {
        name: "Specialization in practical and applied computational linguistics"
      }
    ]
  },
  {
    id: 'edu-3',
    type: 'education',
    startDate: '10.2018',
    endDate: '09.2019',
    major: 'Computational Linguistics, Prerequisite Courses',
    degree: 'Prerequisite Courses',
    university: 'LMU Munich',
    location: 'Munich, Germany',
    link: 'https://www.lmu.de',
    skillIds: ["s1", 's2'],
    courses: [
      {
        name: "Discrete Mathematics"
      },
      {
        name: "Finite State Automata"
      },
      {
        name: "Introduction in Computational Linguistics"
      },
      {
        name: ""
      }
    ]
  },
  {
    id: 'edu-4',
    type: 'education',
    startDate: '09.2014',
    endDate: '06.2018',
    major: 'B.A in German Language and Literature',
    degree: 'Bachelor of Arts',
    university: 'University of Anhui',
    location: 'Hefei, China',
    link: 'https://en.ahu.edu.cn/',
    skillIds: ["s1", 's2'],
    courses: [
      {name: "I learned how to "},
    ]
  },
  {
    id: 'edu-5',
    type: 'education',
    startDate: '10.2016',
    endDate: '08.2017',
    major: 'Exchange Studies in German Language and Literature',
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