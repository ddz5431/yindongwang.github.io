import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaGithub, FaRegFileAlt, FaRegClipboard, FaRegCopy, FaCheck, FaTimes, FaAlignLeft } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';
import './Publications.scss';

const publications = [
    {
        id: "refact",
        title: "ReFACT: A Benchmark for Scientific Confabulation Detection with Positional Error Annotations",
        authors: ["Y. Wang", "M. Preiß", "M. Bugueno", "J.V. Hoffbauer", "A. Ghajar", "T. Buz", "G. de Melo"],
        venue: "EACL 2026",
        year: 2026,
        tags: ["Oral Presentation"],
        links: {
            paper: "https://aclanthology.org/2026.eacl-long.381/",
            github: "https://github.com/ddz5431/ReFACT",
            huggingface: "https://huggingface.co/datasets/ddz5431/refact"
        },
        bibtex: `@inproceedings{wang2026refact,
  title     = {ReFACT: A Benchmark for Scientific Confabulation Detection with Positional Error Annotations},
  author    = {Wang, Yindong and Prei{\\ss}, M. and Bugue{\\~n}o, M. and Hoffbauer, J. V. and Ghajar, A. and Buz, T. and de Melo, Gerard},
  booktitle = {Proceedings of the 2026 Conference of the European Chapter of the Association for Computational Linguistics},
  year      = {2026},
  url       = {https://aclanthology.org/2026.eacl-long.381/}
}`,
        abstract: "The mechanisms underlying scientific confabulation in Large Language Models (LLMs) remain poorly understood. We introduce ReFACT, a benchmark of 1,001 expert-annotated question-answer pairs with span-level error annotations derived from Reddit's r/AskScience. Evaluating 9 state-of-the-art LLMs reveals two critical limitations. First, models exhibit a dominant salient distractor failure mode: 61% of incorrect span predictions are semantically unrelated to actual errors. Crucially, this pattern persists across all model scales (1B to 70B), indicating a fundamental semantic grounding deficit that scaling alone fails to resolve. Second, we find that comparative judgment is paradoxically harder than independent detection–even GPT-4o's F1 score drops from 0.67 to 0.53 when comparing answers side-by-side. These findings directly challenge the reliability of LLM-as-Judge paradigms for scientific factuality. Code and data are released at https://github.com/ddz5431/ReFACT."
    },
    {
        id: "llm-teacher-classification",
        title: "The potential and limitations of large language models for automatic classification of teachers' motivational messages in educational research",
        authors: ["O. Metzner", "Y. Wang", "G. de Melo", "W. Symes", "Y. Huang", "R. Lazarides"],
        venue: "British Journal of Educational Psychology",
        year: 2026,
        tags: [],
        links: {
            paper: "https://bpspsychub.onlinelibrary.wiley.com/doi/full/10.1111/bjep.70013"
        },
        bibtex: `@article{metzner2026llm,
  title   = {The potential and limitations of large language models for automatic classification of teachers' motivational messages in educational research},
  author  = {Metzner, O. and Wang, Y. and de Melo, G. and Symes, W. and Huang, Y. and Lazarides, R.},
  journal = {British Journal of Educational Psychology},
  year    = {2026},
  doi     = {10.1111/bjep.70013}
}`,
        abstract: "This work investigates how well current large language models can automatically classify teachers' motivational messages in educational settings, comparing model predictions against expert-coded ground truth. The study examines both the practical utility of LLMs for educational research workflows and the limitations that arise when domain-specific psychological constructs are involved."
    },
    {
        id: "llm-teacher-speech",
        title: "A process-oriented perspective on pre-service teachers' self-efficacy and their motivational messages: Using large language models to classify teachers' speech",
        authors: ["O. Metzner", "Y. Wang", "W. Symes", "Y. Huang", "L. Keller", "G. de Melo", "R. Lazarides"],
        venue: "British Journal of Educational Psychology",
        year: 2025,
        tags: [],
        links: {
            paper: "https://bpspsychub.onlinelibrary.wiley.com/doi/full/10.1111/bjep.12779"
        },
        bibtex: `@article{metzner2025process,
  title   = {A process-oriented perspective on pre-service teachers' self-efficacy and their motivational messages: Using large language models to classify teachers' speech},
  author  = {Metzner, O. and Wang, Y. and Symes, W. and Huang, Y. and Keller, L. and de Melo, G. and Lazarides, R.},
  journal = {British Journal of Educational Psychology},
  year    = {2025},
  doi     = {10.1111/bjep.12779}
}`,
        abstract: "Taking a process-oriented perspective, this paper examines the relationship between pre-service teachers' self-efficacy beliefs and the motivational messages they produce during teaching. Large language models are used to classify teachers' speech at scale, enabling a finer-grained analysis of how self-efficacy manifests across moments of instruction."
    }
];

// Group publications by year, sorted descending
const groupedByYear = publications.reduce((groups, pub) => {
    if (!groups[pub.year]) groups[pub.year] = [];
    groups[pub.year].push(pub);
    return groups;
}, {});

const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

const highlightAuthor = (author) => {
    return author === "Y. Wang" ? <strong key={author}>{author}</strong> : author;
};

export default function Publications() {
    const location = useLocation();
    const [openBibtex, setOpenBibtex] = useState(null);
    const [openAbstract, setOpenAbstract] = useState(null);
    const [copiedId, setCopiedId] = useState(null);

    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.slice(1));
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                el.classList.add('highlight');
                const t = setTimeout(() => el.classList.remove('highlight'), 2200);
                return () => clearTimeout(t);
            }
        }
    }, [location]);

    const toggleBibtex = (id) => {
        setOpenBibtex((cur) => (cur === id ? null : id));
    };

    const toggleAbstract = (id) => {
        setOpenAbstract((cur) => (cur === id ? null : id));
    };

    const copyBibtex = async (id, text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedId(id);
            setTimeout(() => setCopiedId((cur) => (cur === id ? null : cur)), 1500);
        } catch (e) {
            // clipboard unavailable — silently ignore
        }
    };

    return (
        <div className="publications-section">
            <h2 className="publications-heading">Published Work</h2>
            {sortedYears.map((year) => (
                <div key={year} className="year-group">
                    <div className="year-sidebar">
                        <h3 className="year-label">
                            {year}
                            {String(year) === '2026' && <img src="/horse.svg" alt="" className="year-icon" />}
                        </h3>
                    </div>
                    <div className="year-content">
                    {groupedByYear[year].map((pub) => (
                        <div key={pub.id} id={pub.id} className="publication-card">
                            <h4 className="publication-title">{pub.title}</h4>
                            <p className="publication-authors">
                                {pub.authors.map((author, i) => (
                                    <span key={i}>
                                        {highlightAuthor(author)}
                                        {i < pub.authors.length - 1 && ", "}
                                    </span>
                                ))}
                            </p>
                            <p className="publication-venue">
                                {pub.venue}
                                {pub.tags.map((tag, i) => (
                                    <span key={i} className="tag badge-highlight">{tag}</span>
                                ))}
                            </p>
                            <div className="publication-actions">
                                {pub.links.paper && (
                                    <a href={pub.links.paper} target="_blank" rel="noopener noreferrer" className="action-btn" title="Paper">
                                        <FaRegFileAlt /> Paper
                                    </a>
                                )}
                                {pub.abstract && (
                                    <button
                                        type="button"
                                        className={`action-btn btn-abstract${openAbstract === pub.id ? ' is-open' : ''}`}
                                        onClick={() => toggleAbstract(pub.id)}
                                        title="Abstract"
                                    >
                                        <FaAlignLeft /> Abstract
                                    </button>
                                )}
                                {pub.links.github && (
                                    <a href={pub.links.github} target="_blank" rel="noopener noreferrer" className="action-btn btn-code" title="GitHub">
                                        <FaGithub /> Code
                                    </a>
                                )}
                                {pub.links.huggingface && (
                                    <a href={pub.links.huggingface} target="_blank" rel="noopener noreferrer" className="action-btn btn-dataset" title="Dataset">
                                        <SiHuggingface /> Dataset
                                    </a>
                                )}
                                {pub.bibtex && (
                                    <button
                                        type="button"
                                        className={`action-btn btn-bibtex${openBibtex === pub.id ? ' is-open' : ''}`}
                                        onClick={() => toggleBibtex(pub.id)}
                                        title="BibTeX"
                                    >
                                        <FaRegClipboard /> BibTeX
                                    </button>
                                )}
                            </div>
                            {pub.abstract && openAbstract === pub.id && (
                                <div className="publication-abstract">
                                    <div className="bibtex-toolbar">
                                        <button
                                            type="button"
                                            className="bibtex-close"
                                            onClick={() => setOpenAbstract(null)}
                                            title="Close Abstract"
                                            aria-label="Close Abstract"
                                        >
                                            <FaTimes />
                                        </button>
                                    </div>
                                    <p>{pub.abstract}</p>
                                </div>
                            )}
                            {pub.bibtex && openBibtex === pub.id && (
                                <div className="publication-bibtex">
                                    <div className="bibtex-toolbar">
                                        <button
                                            type="button"
                                            className="bibtex-copy"
                                            onClick={() => copyBibtex(pub.id, pub.bibtex)}
                                            title="Copy BibTeX"
                                        >
                                            {copiedId === pub.id ? <><FaCheck /> Copied</> : <><FaRegCopy /> Copy</>}
                                        </button>
                                        <button
                                            type="button"
                                            className="bibtex-close"
                                            onClick={() => setOpenBibtex(null)}
                                            title="Close BibTeX"
                                            aria-label="Close BibTeX"
                                        >
                                            <FaTimes />
                                        </button>
                                    </div>
                                    <pre><code>{pub.bibtex}</code></pre>
                                </div>
                            )}
                        </div>
                    ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
