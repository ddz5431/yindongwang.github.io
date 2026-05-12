import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaGithub, FaRegFileAlt } from 'react-icons/fa';
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
        }
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
        }
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
        }
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

    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.slice(1));
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                el.classList.add('highlight');
                setTimeout(() => el.classList.remove('highlight'), 2000);
            }
        }
    }, [location]);

    return (
        <div className="publications-section">
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
                            <p className="publication-venue">{pub.venue}</p>
                            <div className="publication-actions">
                                {pub.tags.map((tag, i) => (
                                    <span key={i} className="tag badge-highlight">{tag}</span>
                                ))}
                                {pub.links.paper && (
                                    <a href={pub.links.paper} target="_blank" rel="noopener noreferrer" className="action-btn" title="Paper">
                                        <FaRegFileAlt /> Paper
                                    </a>
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
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
