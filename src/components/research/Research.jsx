import React, { useState } from 'react';
import './Research.scss'

const Research = () => {
  const [showIntro, setShowIntro] = useState(false);
  const researchTopics = [
    {
      topic: "Artificial Intelligence",
      title: "Large Language Models (LLMs) represent the current frontier of AI.",
      content: "Through LLM research, I aim to answer foundational questions about their nature: what they truly are, how their capabilities emerge, and where their development will lead. I believe that exploring these interconnected topics systematically is crucial for advancing our overall understanding of intelligence.",
      subtopics: [
        {
          id: "llm-reasoning",
          name: "LLM Reasoning",
          description: "Investigating how LLMs perform logical reasoning, identifying their current cognitive gaps, and understanding the root causes of these limitations.",
          works: []
        },
        {
          id: "llm-evaluation",
          name: "LLM Evaluation",
          description: "Mapping the boundaries of model capabilities to understand what they can achieve, where they fail, and the underlying mechanisms.",
          works: [
            { title: "ReFACT", note: "A benchmark for scientific confabulation detection with positional error annotations.", id: "refact", status: "Published", url: "https://aclanthology.org/2026.eacl-long.381/" },
          ]
        },
        {
          id: "llm-alignment",
          name: "LLM Alignment",
          description: "Exploring the theoretical foundations of value alignment and developing practical methodologies to ensure safe and human-aligned AI systems.",
          works: []
        },
      ]
    },
    {
      topic: "Education and Psychology",
      title: "Investigating the transmission of intelligence: how education facilitates knowledge transfer, and how teacher-student dynamics influence the cognitive development process.",
      publications: [
        { label: "LLM Teacher Classification", id: "llm-teacher-classification", url: "https://bpspsychub.onlinelibrary.wiley.com/doi/full/10.1111/bjep.70013" },
        { label: "LLM Teacher Speech", id: "llm-teacher-speech", url: "https://bpspsychub.onlinelibrary.wiley.com/doi/full/10.1111/bjep.12779" },
      ]
    }
  ];

  return (
    <div className="researchTopic">
      <div className="research-header" onClick={() => setShowIntro(!showIntro)}>
        <h2>Research Vision <span className={`research-toggle ${showIntro ? 'open' : ''}`}>›</span></h2>
        {showIntro && (
          <div className="research-intro">
            <h3>Who am I? Where do I come from? Where am I going?</h3>
            <p>
              I am driven by fundamental scientific questions that remain largely unexplored.
              As we approach the era of Artificial General Intelligence (AGI), my research is guided by these three profound questions.
              I believe that understanding the nature of intelligence is essential to answering them, and all of my research revolves around this central vision.
            </p>
          </div>
        )}
      </div>
      {researchTopics.map((item, index) => (
        <div key={index} className="research-entry">
          {item.topic && <p className="research-topic">{item.topic}</p>}
          {item.title && <p className="research-title">{item.title}</p>}
          {item.content && <p className="research-content">{item.content}</p>}
          {item.publications && item.publications.length > 0 && (
            <div className="topic-publications">
              {item.publications.map((pub, pubIndex) => (
                <a key={pubIndex} href={pub.url} target="_blank" rel="noopener noreferrer" className="pub-link">
                  {pub.label}
                </a>
              ))}
            </div>
          )}
          {item.subtopics && item.subtopics.length > 0 && (
            <ul className="research-subtopics">
              {item.subtopics.map((sub, subIndex) => (
                <li key={subIndex} id={sub.id} className="research-subtopic">
                  <span className="subtopic-name">{sub.name}</span>
                  {sub.description && <span className="subtopic-description"> — {sub.description}</span>}
                  {sub.works && sub.works.length > 0 && (
                    <div className="subtopic-works">
                      {sub.works.map((work, workIndex) => (
                        <div key={workIndex} className="work-item">
                          <div className="work-header">
                            {work.url
                              ? <a href={work.url} target="_blank" rel="noopener noreferrer" className="work-title">{work.title}</a>
                              : <span className="work-title">{work.title}</span>
                            }
                            <span className={`work-status status-${work.status.toLowerCase().replace(/\s+/g, '-')}`}>
                              {work.status}
                            </span>
                          </div>
                          {work.note && <p className="work-note">{work.note}</p>}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Research;
