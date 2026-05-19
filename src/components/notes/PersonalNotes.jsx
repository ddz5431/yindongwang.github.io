import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegCalendar, FaRegCalendarCheck } from 'react-icons/fa';
import { notes, extractText, formatDate } from './notes-data';
import './PersonalNotes.scss'

const SNIPPET_CHARS = 220;

const buildSnippet = (content) => {
  const text = extractText(content).replace(/\s+/g, ' ').trim();
  if (text.length <= SNIPPET_CHARS) return { text, truncated: false };
  const cut = text.slice(0, SNIPPET_CHARS);
  const lastSpace = cut.lastIndexOf(' ');
  return { text: (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + '…', truncated: true };
};

const PersonalNotes = () => {
  return (
    <div className="personal-notes">
      <h3>Here, I'm going to blog about things I'm learning and thinking about.</h3>
      <ul className="note-list">
        {notes.map((note) => {
          const snippet = note.excerpt
            ? { text: note.excerpt, truncated: true }
            : buildSnippet(note.content);
          const fallbackTitle = snippet.text.split(/[.!?]/)[0];
          const inner = (
            <>
              <h2 className="note-card-title">{note.title || fallbackTitle}</h2>
              <div className="note-meta">
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
              <p className="note-card-snippet">{snippet.text}</p>
              {snippet.truncated && <span className="note-card-readmore">Read more →</span>}
            </>
          );
          return (
            <li key={note.id} className={`note-card${snippet.truncated ? '' : ' note-card-short'}`}>
              {snippet.truncated ? (
                <Link to={`/blog/${note.id}`} className="note-card-link">{inner}</Link>
              ) : (
                <div className="note-card-link note-card-static">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PersonalNotes;
