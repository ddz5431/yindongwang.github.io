import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Research.scss'

const Research = () => {
  const [showIntro, setShowIntro] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const fromResume = location.state?.from === 'resume';
  const targetSubtopicId = location.hash ? location.hash.slice(1) : null;

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.classList.add('highlight');
        const t = setTimeout(() => el.classList.remove('highlight'), 2000);
        return () => clearTimeout(t);
      }
    }
  }, [location]);

  // Subtopic reading-progress + scrollspy.
  //
  // Each .research-subtopic gets a CSS variable --subtopic-progress (0..1)
  // tracking how far the reader has scrolled through that block, measured
  // against a "focus line" set at 30% from the viewport top (the natural
  // reading anchor on most screens).
  //
  // The subtopic whose bounds straddle the focus line is also marked with
  // .is-active so the SCSS can spotlight its left bar (full saturation +
  // progress fill) and leave the others as faded inactive lines.
  useEffect(() => {
    const update = () => {
      const nodes = Array.from(document.querySelectorAll('.research-subtopic'));
      const focusY = window.innerHeight * 0.3;
      let activeIdx = -1;
      let activeTop = -Infinity;

      nodes.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const span = rect.height;
        if (span > 0) {
          const passed = focusY - rect.top;
          const p = Math.min(1, Math.max(0, passed / span));
          el.style.setProperty('--subtopic-progress', p.toFixed(3));
        } else {
          el.style.setProperty('--subtopic-progress', '0');
        }
        // Active = the bottom-most subtopic whose top has crossed the focus
        // line (so as you scroll, the spotlight moves down to the next one).
        if (rect.top <= focusY && rect.top > activeTop) {
          activeTop = rect.top;
          activeIdx = i;
        }
      });

      nodes.forEach((el, i) => {
        el.classList.toggle('is-active', i === activeIdx);
      });
    };

    // rAF-throttle the scroll handler so getBoundingClientRect() inside
    // update() only runs once per paint frame, even when scroll fires
    // dozens of times per second on a high-rate trackpad or mobile flick.
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);
  const researchTopics = [
    {
      topic: "Artificial Intelligence",
      title: "Large Language Models (LLMs) represent the current frontier of AI.",
      content: "Through LLM research, I aim to answer foundational questions about their nature from both an evolutionary and human-centric perspective. Although we created LLMs to mimic human cognition, they are fundamentally distinct, currently serving as highly advanced tools. Yet, the mechanics of their creation, the dynamics of our interaction with them, and their ultimate trajectory remain deeply mysterious. By systematically exploring these open questions, from how their capabilities emerge to how they will ultimately reshape human life. I believe we can advance our overarching understanding of intelligence itself.",
      subtopics: [
        {
          id: "llm-reasoning",
          name: "LLM Reasoning",
          description: "Intuition and logical reasoning serve as the two foundational pillars of human intelligence. Intuition, a highly energy-efficient product of evolution, governs the vast majority of our cognitive processes. Logical reasoning, by contrast, is a metabolically expensive mechanism used to test and correct our intuitions when interacting with complex environments. Ultimately, the goal of reasoning is cognitive efficiency: to compress newly acquired, verified knowledge back into intuitive responses. This continuous cycle of correcting and internalizing is the essence of learning. While human intuition evolved under strict thermodynamic constraints (forcing the continuous compression of complex reasoning into rapid, energy-efficient heuristics), the 'intuition' of an LLM is driven by a singular, unconstrained objective: next-token prediction. It is a remarkable testament to this mechanism that a one-dimensional objective can yield such a powerful, multi-dimensional approximation of intelligence.\n" +
              "\n" +
              "However, the very nature of this objective bottlenecks their reasoning capabilities. Human reasoning adapts efficiently to diverse, complex environments because energy conservation demands it. LLMs, conversely, operate without a metabolic cost. Having been trained with massive compute and often rewarded for verbosity, they lack the biological imperative to optimize their cognitive load. Consequently, their reasoning is unrolled explicitly into the token space, applying the same computational sprawl to trivial queries as they do to complex ones. They fail to reason efficiently simply because they have never had to survive.\n" + "\n" +
              "If their inability to adapt their reasoning efficiency stems from this lack of a \"metabolic cost,\" how might we algorithmically or mathematically introduce an artificial constraint during the decoding process to force them to reason more efficiently? This is one of my research questions I'm trying to answer by researching on it throughout my PhD journey."
          ,
          works: []
        },
        {
          id: "llm-alignment",
          name: "LLM Alignment",
          description: "Human alignment operates across multiple dimensions. Externally, we adopt shared communication protocols, such as language, and foundational moral imperatives to ensure social cohesion and collective survival, even as our individual variance provides the necessary diversity for a vibrant world. Internally, psychological stability depends on aligning our explicit actions with our latent desires and beliefs.\n" +
              "\n" +
              "As the creators of Large Language Models, we are essentially projecting this dual framework onto artificial intelligence. We demand external alignment: the model must dynamically adapt to the user's language while strictly adhering to global human values of safety and helpfulness. Simultaneously, we demand internal alignment: a high-fidelity mapping between the model's latent representations (its 'thoughts') and its generated output.\n" +
              "\n" +
              "My research approaches this from a strictly technical perspective, focusing on how we algorithmically enforce and decode these semantic and safety requirements, and how we can make this process fundamentally more efficient. The current alignment paradigm relies heavily on brute-force post-training, demanding vast human effort to annotate preference data and immense computational power for reinforcement learning. But do humans align their values through such exhaustive iterations? Can we draw inspiration from the natural efficiency of human interaction to evolve LLM alignment? Ultimately, how can we liberate this process from its current computational bottlenecks?",
          works: []
        },
          {
          id: "llm-evaluation",
          name: "LLM Evaluation",
          description: "This is essential for doing LLM research. It helps me to better understand the true reasoning and alignment capabilities of LLMs.",
          works: []
        },
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
              {item.subtopics.map((sub, subIndex) => {
                const paragraphs = sub.description
                  ? sub.description.split(/\n{2,}/).map(p => p.trim()).filter(Boolean)
                  : [];
                return (
                <li key={subIndex} id={sub.id} className="research-subtopic">
                  <span className="subtopic-name">{sub.name}</span>
                  {paragraphs.length > 0 && (
                    <div className="subtopic-description subtopic-description-block">
                      {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                  )}
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
                  {fromResume && targetSubtopicId === sub.id && (
                    <button
                      type="button"
                      className="subtopic-back-link"
                      onClick={() => navigate(-1)}
                    >
                      ← Back to Resume
                    </button>
                  )}
                </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Research;
