import { WorkExperience, EducationBackground, Skill, TimelineEventData } from "./types";

export const work: WorkExperience[] = [
  // {
  //   id: 'work-1',
  //   type: 'work',
  //   startDate: 'Jan 2024',
  //   endDate: 'present',
  //   position: 'Ph.D. Candidate in AI and Intelligent Systems / Doctoral Researcher in AI',
  //   company: 'Hasso Plattner Institute',
  //   location: 'Potsdam, Germany',
  //   link: 'https://hpi.de',
  //   skillIds: ['s18', 's20', 's21'],
  //   projects: [
  //     {
  //       name: "Paper: Entailment Few-shot Learning with Large Language Models",
  //       description:
  //         "This study explores few-shot learning with pretrained language models using a textual entailment-based framework, achieving performance improvements across model architectures without relying on external NLI data.",
  //       skills: ["Large Language Models", "Few-shot Learning", "Text Classification"],
  //     },
  //     {
  //       name: "Master Project: Facts Matter - Benchmark LLMs' hallucination detection and mitigation abilities",
  //       description: "Supervised Master Project on LLM hallucinations (Summer 2024).",
  //       skills: ["LLM Hallucinations", "AI Safety"],
  //     },
  //     {
  //       name: "Master Seminar: MetaImage - Decoding Languages from Visual Metaphors",
  //       description:
  //         "Supervised Research Seminar: Trends in AI and Deep Learning Research Seminar (Summer 2024).",
  //       skills: ["Vision-Language Models", "Multilinguality", "Language Bias"],
  //     },
  //   ],
  // },
  {
    id: 'work-2',
    type: 'work',
    startDate: 'Oct 2021',
    endDate: 'Dec 2023',
    position: 'NLP Engineer',
    company: 'MORESOPHY GmbH',
    location: 'Munich, Germany',
    link: 'https://www.moresophy.com/en',
    skillIds: ['s1', 's2', 's4'],
    projects: [
      {
        name: "Transformer-based NLP Pipeline Transition",
        description:
          "Spearheaded the transition from traditional ML pipelines to transformer-based architectures for advanced text analysis tasks (NER, summarization, classification), significantly enhancing multilingual capabilities and model performance.",
        skills: ["NLP", "Transformer Models", "Machine Learning", "Python"],
      },
      {
        name: "Elasticsearch Integration for NLP Infrastructure",
        description:
          "Integrated Elasticsearch to optimize data retrieval and indexing, creating a more efficient and scalable NLP infrastructure.",
        skills: ["Elasticsearch", "Data Indexing", "NLP", "Database Optimization"],
      },
      {
        name: "ML Model Deployment and API Development",
        description:
          "Containerized and orchestrated ML model deployments using Kubernetes, developed high-performance APIs with FastAPI for model serving; monitored ML training with MLFlow and Wandb.",
        skills: ["Kubernetes", "FastAPI", "MLFlow", "Wandb", "DevOps", "API Development"],
      },
    ],
  },
  {
    id: 'work-3',
    type: 'work',
    startDate: 'May 2021',
    endDate: 'Oct 2021',
    position: 'Data Analyst',
    company: 'BingoStar GmbH',
    location: 'Munich, Germany',
    link: 'https://www.lmu.de',
    skillIds: ['s1'],
    projects: [
      {
        name: "Sales Data Automation & Trend Analysis",
        description:
          "Developed an automated system to generate sales tables for various product categories from diverse types of receipts. Conducted data analysis to identify shopping trends for an Asia market, optimizing product categorization and marketing strategies.",
        skills: ["Data Automation", "SQL", "Data Analysis"],
      },
    ],
  },
  {
    id: 'work-4',
    type: 'work',
    startDate: 'Oct 2019',
    endDate: 'Jul 2021',
    position: 'Teaching Assistant',
    company: 'LMU Munich',
    location: 'Munich, Germany',
    link: 'https://www.lmu.de',
    skillIds: ['s1', 's2', 's17'],
    projects: [
      {
        name: "Computational Linguistics Course Teaching Assistant",
        description:
          "Held weekly tutorials, providing guidance on programming in Computational Linguistics. Evaluated student assignments and provided constructive feedback to enhance learning outcomes.",
        skills: ["Teaching", "Computational Linguistics", "Programming", "Student Evaluation"],
      },
    ],
  },
    {
    id: 'work-5',
    type: 'work',
    startDate: 'Sep 2018',
    endDate: 'March 2018',
    position: 'Marketing Intern',
    company: 'Bosch China',
    location: 'Shanghai, China',
    link: 'https://www.lmu.de',
    skillIds: ['s22', 's23'],
    projects: [
    {
      name: "Market Analysis for Diesel Products",
      description: "Assisted the Diesel Product Manager with market research and analysis, contributing to data-driven product and marketing decisions.",
      skills: ["Market Analysis", "Data Interpretation", "Product Strategy"],
    },
    {
      name: "National Diesel Roadshow 2018",
      description: "Coordinated and supported the organization of a national Diesel Roadshow to increase product visibility and customer engagement across multiple regions.",
      skills: ["Event Coordination", "Logistics Management", "Customer Engagement"],
    }
  ]
  },
    {
    id: 'work-6',
    type: 'work',
    startDate: 'Feb 2018',
    endDate: 'Sep 2018',
    position: 'Freelancing German Teacher',
    company: 'Freelancer',
    location: 'Shanghai, China',
    link: 'https://www.lmu.de',
    skillIds: ['s17', 's22'],
    projects: [
    {
      name: "Personalized German Language Lessons",
      description: "Provided tailored one-on-one German language instruction to students, focusing on conversational skills and cultural understanding. Created personalized lesson plans to accommodate different learning styles.",
      skills: ["Language Instruction", "Lesson Planning", "Student Engagement"],
    },
  ]
  },
    {
  id: 'work-8',
  type: 'work',
  startDate: 'Sep 2019',
  endDate: 'Sep 2020',
  position: 'German Interpreter',
  company: 'Freelancer',
  location: 'Munich, Germany',
      link: "",
  skillIds: ['s22'], // Replace with actual skill names
  projects: [
    {
      name: "Exhibition Interpreter",
      description: "Provided interpretation services at multiple international exhibitions, facilitating communication between German-speaking exhibitors and Chinese clients.",
      skills: ["Interpretation", "Cross-Cultural Communication", "Industry Terminology"],
    },
    {
      name: "Accompanying Translator",
      description: "Served as an accompanying translator for Chinese delegations during business trips and factory visits, ensuring clear communication and smooth negotiations.",
      skills: ["Translation", "Business Communication", "Client Relations"],
    }
  ]
}

];

export const education: EducationBackground[] = [
    {
      id: 'work-1',
      type: 'education',
      startDate: 'Jan 2024',
      endDate: 'present',
      major: 'Ph.D. Candidate in AI and Intelligent Systems',
      degree: 'Doctor Degree',
      university: 'Hasso Plattner Institute',
      location: 'Potsdam, Germany',
      link: 'https://hpi.de',
      skillIds: ['s18', 's20', 's21'],
      projects: [
        {
          name: "Paper: Entailment Few-shot Learning with Large Language Models",
          description:
            "This study explores few-shot learning with pretrained language models using a textual entailment-based framework, achieving performance improvements across model architectures without relying on external NLI data.",
          skills: ["Large Language Models", "Few-shot Learning", "Text Classification"],
        },
        {
          name: "Master Project: Facts Matter - Benchmark LLMs' hallucination detection and mitigation abilities",
          description: "Supervised Master Project on LLM hallucinations (Summer 2024).",
          skills: ["LLM Hallucinations", "AI Safety"],
        },
        {
          name: "Master Seminar: MetaImage - Decoding Languages from Visual Metaphors",
          description:
            "Supervised Research Seminar: Trends in AI and Deep Learning Research Seminar (Summer 2024).",
          skills: ["Vision-Language Models", "Multilinguality", "Language Bias"],
        },
      ],
  },
  {
    id: 'edu-2',
    type: 'education',
    startDate: 'Oct 2019',
    endDate: 'Sep 2021',
    major: 'MSc. in Computational Linguistics and CS',
    degree: 'Master of Science',
    university: 'LMU Munich',
    location: 'Munich, Germany',
    link: 'https://www.lmu.de',
    skillIds: ['s2', 's4', 's5', 's7'],
    courses: [
      { name: "Deep Learning For NLP" },
      { name: "Knowledge Discovery in Databases" },
      { name: "Lexikon, Syntax, Semantik" },
      { name: "Specialization in Practical and Applied Computational Linguistics" },
    ],
  },
  {
    id: 'edu-3',
    type: 'education',
    startDate: 'Oct 2018',
    endDate: 'Sep 2019',
    major: 'Computational Linguistics, Prerequisite Courses',
    degree: 'Prerequisite Courses',
    university: 'LMU Munich',
    location: 'Munich, Germany',
    link: 'https://www.lmu.de',
    skillIds: ['s1', 's2', 's4'],
    courses: [
      { name: "Discrete Mathematics" },
      { name: "Finite State Automata" },
      { name: "Introduction to Computational Linguistics" },
      { name: "Programming Course: Python" },
    ],
  },
  {
    id: 'edu-4',
    type: 'education',
    startDate: 'Sep 2014',
    endDate: 'Jun 2018',
    major: 'B.A in German Language and Literature',
    degree: 'Bachelor of Arts',
    university: 'University of Anhui',
    location: 'Hefei, China',
    link: 'https://en.ahu.edu.cn/',
    skillIds: ['s15'],
    courses: [
      {
        name: "Started learning German from scratch during my bachelor's studies, achieving native-level proficiency.",
      },
    ],
  },
  {
    id: 'edu-5',
    type: 'education',
    startDate: 'Oct 2016',
    endDate: 'Aug 2017',
    major: 'Exchange Studies in German Language and Literature',
    degree: 'Exchange Studies',
    university: 'University of Osnabrück',
    location: 'Osnabrück, Germany',
    link: 'https://www.uni-osnabrueck.de/',
    skillIds: ['s15'],
    courses: [{ name: "Explored German culture and history." }],
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
  { id: 's15', name: 'Foreign Language', category: 'language' },
  { id: 's16', name: 'Thesis Supervision', category: 'soft' },
  { id: 's17', name: 'Teaching', category: 'soft' },
  { id: 's18', name: 'LLM Alignment', category: 'soft' },
  { id: 's19', name: 'AI for Education', category: 'soft' },
  { id: 's20', name: 'LLM Hallucinations', category: 'soft' },
  { id: 's21', name: 'LLM Reasoning', category: 'soft' },
  { id: 's22', name: 'Human communication', category: 'soft'},
  { id: 's23', name: 'Marketing', category: 'soft'}
];

function parseDateString(dateStr: string): Date {
  if (['now', 'current', 'present'].includes(dateStr.toLowerCase())) {
    return new Date(9999, 0, 1); // Assign a far future date for 'present'
  }

  const [monthName, yearStr] = dateStr.split(' ');
  const month = new Date(`${monthName} 1, ${yearStr}`).getMonth();
  const year = parseInt(yearStr);

  if (isNaN(month) || isNaN(year)) {
    throw new Error(`Invalid date string: ${dateStr}`);
  }

  return new Date(year, month);
}

export const combinedTimeline: TimelineEventData[] = [...work, ...education].sort((a, b) => {
  const dateA = parseDateString(a.endDate).getTime();
  const dateB = parseDateString(b.endDate).getTime();
  return dateB - dateA; // Sort in descending order (most recent first)
});
