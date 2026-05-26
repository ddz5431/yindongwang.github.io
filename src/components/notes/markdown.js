import React from 'react';

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const replaceNames = (text, nameMap) => {
  if (!nameMap) return text;
  const entries = Object.entries(nameMap).filter(([from, to]) => from && to && from !== to);
  if (entries.length === 0) return text;
  // Replace longer keys first so "费渝" matches before "渝".
  entries.sort((a, b) => b[0].length - a[0].length);
  let out = text;
  for (const [from, to] of entries) {
    out = out.replace(new RegExp(escapeRegExp(from), 'g'), to);
  }
  return out;
};

const INLINE_RE = /(\*\*([^*]+)\*\*)|(\*([^*\n]+)\*)|(\[([^\]]+)\]\(([^)]+)\))|(`([^`]+)`)/g;

const renderInline = (text, keyPrefix) => {
  const out = [];
  let last = 0;
  let m;
  let k = 0;
  INLINE_RE.lastIndex = 0;
  while ((m = INLINE_RE.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<strong key={`${keyPrefix}-${k++}`}>{m[2]}</strong>);
    else if (m[3]) out.push(<em key={`${keyPrefix}-${k++}`}>{m[4]}</em>);
    else if (m[5]) out.push(
      <a key={`${keyPrefix}-${k++}`} href={m[7]} target="_blank" rel="noopener noreferrer">{m[6]}</a>
    );
    else if (m[8]) out.push(<code key={`${keyPrefix}-${k++}`}>{m[9]}</code>);
    last = INLINE_RE.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.length === 1 && typeof out[0] === 'string' ? out[0] : out;
};

const renderParagraph = (line, key, className) =>
  <p className={className} key={key}>{renderInline(line, key)}</p>;

export const parseMarkdown = (text) => {
  if (!text) return [];
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let k = 0;
  let inFooter = false;

  // Each non-empty line becomes its own paragraph so dialogue turns get
  // their own visual block. Blank lines are skipped (spacing comes from CSS margin).
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (line.trim() === '') continue;

    if (/^#\s+/.test(line)) continue; // H1 used as title — skip

    const h2 = line.match(/^##\s+(.*)$/);
    if (h2) {
      out.push(<h3 className="post-heading" key={`h${k++}`}>{renderInline(h2[1], `h${k}`)}</h3>);
      continue;
    }

    const h3 = line.match(/^###\s+(.*)$/);
    if (h3) {
      out.push(<h4 className="post-heading" key={`h${k++}`}>{renderInline(h3[1], `h${k}`)}</h4>);
      continue;
    }

    if (/^---+\s*$/.test(line)) {
      out.push(<hr key={`hr${k++}`} />);
      inFooter = true;
      continue;
    }

    const cls = inFooter ? 'note-content post-footer' : 'note-content';
    out.push(renderParagraph(line, `p${k++}`, cls));
  }
  return out;
};