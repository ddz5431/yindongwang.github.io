import React from 'react';

export const WORDS_PER_MINUTE = 200;

export const extractText = (node) => {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join(' ');
  if (React.isValidElement(node)) return extractText(node.props.children);
  if (typeof node === 'object' && node.quote) {
    return [node.quote, node.author].filter(Boolean).join(' ');
  }
  return '';
};

export const countWords = (content) => {
  const text = extractText(content);
  return text.trim().split(/\s+/).filter(Boolean).length;
};

export const formatDate = (iso) => {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${m}-${d}-${y}`;
};

const rawNotes = [
  // {
  //   id: 'paper-review-system',
  //   date: '2026-05-11',
  //   title: 'On the current paper review system in Deep Learning',
  //   content: [
  //     'I"ve been thinking about this for a quite long time. The problems we encounter are central to one single core problem: too many papers get assigned to too few reviewers. ' +
  //       'Since I"ve joined HPI as a PhD student, when we talk about the paper submission and review process, we mostly got this complaints from both PhD and professors. ',
  //   ],
  // },
  {
    id: 'disentangle',
    date: '2026-05-06',
    title: 'Disentangle one thing from another',
    excerpt:
      'I enjoy solving real-life problems, regardless of their complexity, as long as they challenge me. That being said, I am someone who constantly observes problems while also harboring many of my own, which keeps my mind continuously racing.',
    content: [
      <h3 className="post-heading">1. The Stagnation of Research</h3>,
      <p className="note-content">I enjoy solving real-life problems, regardless of their complexity, as long as they challenge me. That being said, I am someone who constantly observes problems while also harboring many of my own, which keeps my mind continuously racing.</p>,
      <p className="note-content">I cannot stop thinking about research because I see so many unresolved issues. I read papers for two purposes: to gain knowledge and to seek problems. Yet, I get bored quickly{'\u2014'}especially when a research field stagnates, getting stuck on a single point and merely recycling the same approaches with different phrasing.</p>,
      <ul className="post-list">
        <li><strong>Was the problem actually solved?</strong></li>
        <li><strong>Or was it even a new problem to begin with?</strong> Probably not. History repeats itself.</li>
      </ul>,

      <h3 className="post-heading">2. The Observer{'\u2019'}s Prior</h3>,
      <p className="note-content">At this point, studying people within a societal environment and its derived complexity makes me feel more alive, giving my existence a sense of meaning.</p>,
      <p className="note-content">From an observer{'\u2019'}s perspective, it is impossible to observe without one{'\u2019'}s own purposes and biases. This is what we call <em>the prior</em>. Whether or not we consciously use this prior, we are inherently involved, simply because <strong>observation is inextricably entangled with action.</strong> We must decide what actions to execute to steer things in the direction we desire.</p>,

      <h3 className="post-heading">3. The Dilemma of Choice</h3>,
      <p className="note-content">The first step is to distinguish between what we can and cannot do, conditioned on our environment. Depending on our interaction with the subject and the timing, we are left with either many options or none at all. Does having many options mean we are lucky? I don{'\u2019'}t know. But certainly, having no options is rarely ideal.</p>,
      <p className="note-content">When we do have choices, we are forced to ask:</p>,
      <ul className="post-list">
        <li>What should we choose?</li>
        <li>Why not the alternatives?</li>
        <li>And what are the consequences of taking one path over another?</li>
      </ul>,
      <p className="note-content">The most crucial question becomes: <strong>can we accept those consequences?</strong></p>,

      <h3 className="post-heading">4. Untangling the Knots</h3>,
      <p className="note-content">Thinking about this gives me a headache. I consulted Ralf about what I should do. The people involved are entangled with one another, and everything about them is intertwined. I like good entanglements, not bad ones. However, I don{'\u2019'}t know how to transform a bad entanglement into a good one.</p>,
      <p className="note-content">Ralf suggested we should <strong>disentangle the situation by removing the unnecessary knots</strong>, and then untangle whatever remains. By starting at the exact point where the entanglement turned bad, the situation becomes much clearer.</p>,
      <p className="note-content">I simply don{'\u2019'}t want to walk away from the entanglement, even though it is so messy. Or perhaps I am just afraid of the negative consequences my actions might bring. We could rely on trial and error.</p>,
      {
        quote:
          '\u201CUncertainty is only diminished when we persist to the very end. Sometimes, we must simply act without overanalyzing. Disentangle action from overthinking! Embrace the uncertainty, and accept that the outcome might be unfavorable. That is simply what life is.\u201D',
      },
      <p className="note-content">said Ralf. Maybe we should just trust our intuitions and follow our hearts.</p>,
      <p className="note-content">Dear reader, can we? Or perhaps we should reverse the question and instead ask: <strong>why can{'\u2019'}t we?</strong></p>,
    ],
  },
  {
    id: 'launch',
    date: '2024-10-10',
    content:
      "Excited to launch my personal website! Started in 2022, " +
      "but put it on hold for 2 years, and now it's finally done.",
  },
];

export const notes = [...rawNotes].sort((a, b) => new Date(b.date) - new Date(a.date));

export const findNote = (id) => notes.find((n) => n.id === id);
