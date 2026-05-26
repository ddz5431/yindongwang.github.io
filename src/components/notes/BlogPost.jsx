import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaRegCalendar, FaRegCalendarCheck } from 'react-icons/fa';
import { findNote, formatDate } from './notes-data';
import { parseMarkdown, replaceNames } from './markdown';
import './PersonalNotes.scss';

const renderItem = (item) => {
  if (
    typeof item === 'object' &&
    item !== null &&
    !React.isValidElement(item) &&
    item.quote
  ) {
    return (
      <blockquote className="note-quote">
        <p>{item.quote}</p>
        {item.author && <cite>— {item.author}</cite>}
      </blockquote>
    );
  }
  if (React.isValidElement(item)) return item;
  return <p className="note-content">{item}</p>;
};

const isHeading = (item) =>
  React.isValidElement(item) && typeof item.type === 'string' && /^h[1-6]$/.test(item.type);

const groupIntoSections = (items) => {
  const sections = [];
  let current = { heading: null, items: [] };
  items.forEach((item, idx) => {
    if (isHeading(item)) {
      if (current.heading || current.items.length) sections.push(current);
      current = { heading: { item, idx }, items: [] };
    } else {
      current.items.push({ item, idx });
    }
  });
  if (current.heading || current.items.length) sections.push(current);
  return sections;
};

const BlogPost = () => {
  const { slug } = useParams();
  const note = findNote(slug);

  const [mdItems, setMdItems] = useState(null);

  useEffect(() => {
    if (!note?.markdownUrl) { setMdItems(null); return; }
    let cancelled = false;
    fetch(note.markdownUrl)
      .then((r) => r.text())
      .then((text) => {
        if (cancelled) return;
        setMdItems(parseMarkdown(replaceNames(text, note.nameMap)));
      })
      .catch(() => { if (!cancelled) setMdItems([]); });
    return () => { cancelled = true; };
  }, [note?.markdownUrl, note?.nameMap]);

  const items = useMemo(() => {
    if (note?.markdownUrl) return mdItems || [];
    if (Array.isArray(note?.content)) return note.content;
    return note ? [note.content] : [];
  }, [note, mdItems]);
  const sections = useMemo(() => groupIntoSections(items), [items]);
  const [focusMode, setFocusMode] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const blockRefs = useRef([]);
  const [revealed, setRevealed] = useState(() => new Set());

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      setShowBack(scrolled >= total - 80);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    if (!focusMode) return;
    document.body.classList.add('focus-mode-on');
    return () => document.body.classList.remove('focus-mode-on');
  }, [focusMode]);

  useEffect(() => {
    document.body.classList.add('blog-reading');
    return () => document.body.classList.remove('blog-reading');
  }, []);

  useEffect(() => {
    if (items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.idx);
            if (!Number.isNaN(idx)) {
              setRevealed((prev) => {
                if (prev.has(idx)) return prev;
                const next = new Set(prev);
                next.add(idx);
                return next;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px' }
    );
    blockRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [items.length]);

  if (!note) {
    return (
      <div className="personal-notes">
        <p className="note-not-found">
          Post not found. <Link to="/blog">Back to blog</Link>
        </p>
      </div>
    );
  }

  return (
    <div className={`personal-notes blog-post${focusMode ? ' focus-mode' : ''}`}>
      {note.title && <h1 className="post-title">{note.title}</h1>}
      <div className="note-meta">
        <div className="note-meta-info">
          <span className="note-meta-item">
            <FaRegCalendar className="note-meta-icon" />
            {formatDate(note.date)}
          </span>
          {note.updated && (
            <span className="note-meta-item">
              <FaRegCalendarCheck className="note-meta-icon" />
              {formatDate(note.updated)}
            </span>
          )}
        </div>
        <label className="focus-toggle">
          <input
            type="checkbox"
            checked={focusMode}
            onChange={(e) => setFocusMode(e.target.checked)}
          />
          <span className="focus-toggle-track" aria-hidden="true" />
          <span className="focus-toggle-label">Focus mode</span>
        </label>
      </div>

      <div className="post-body">
        {sections.map((section, sIdx) => (
          <div key={sIdx} className="post-section">
            {section.heading && (
              <div
                ref={(el) => { blockRefs.current[section.heading.idx] = el; }}
                data-idx={section.heading.idx}
                className={`post-block post-block-heading${revealed.has(section.heading.idx) ? ' is-revealed' : ''}`}
              >
                {renderItem(section.heading.item)}
              </div>
            )}
            {section.items.map(({ item, idx }) => (
              <div
                key={idx}
                ref={(el) => { blockRefs.current[idx] = el; }}
                data-idx={idx}
                className={`post-block${revealed.has(idx) ? ' is-revealed' : ''}`}
              >
                {renderItem(item)}
              </div>
            ))}
          </div>
        ))}
      </div>

      <Link
        to="/blog"
        className={`blog-back-link blog-back-link-bottom${showBack ? ' is-visible' : ''}`}
      >
        ← Back to blog
      </Link>
    </div>
  );
};

export default BlogPost;
