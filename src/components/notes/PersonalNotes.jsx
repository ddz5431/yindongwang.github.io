import React from 'react';
import './PersonalNotes.scss'

const PersonalNotes = () => {
  const notes = [
    {
      date: "2026-05-11",
      title: "On the current paper review system in Deep Learning",
      content: [
          'I"ve been thinking about this for a quite long time. The problems we encounter are central to one single core problem: too many papers get assigned to too few reviewers. ' +
          'Since I"ve joined HPI as a PhD student, when we talk about the paper submission and review process, we mostly got this complaints from both PhD and professors. '
      ]
    },
    {
      date: "2026-05-06",
      title: "Disentangle one thing from another.",
      content: [
        'I enjoy solving real-life problems, regardless of their complexity, as long as they challenge me. That being said, I am someone who constantly observes problems while also harboring many of my own, which keeps my mind continuously racing. I cannot stop thinking about research because I see so many unresolved issues. I read papers for two purposes: to gain knowledge and to seek out problems. Yet, I get bored quickly\u2014especially when a research field stagnates, getting stuck on a single point and merely recycling the same approaches with different phrasing. Was the problem actually solved? Or was it even a new problem to begin with? Probably not. History repeats itself.',
        'At this point, studying people within a societal environment and its derived complexity makes me feel more alive, giving my existence a sense of meaning. From an observer\u2019s perspective, it is impossible to observe without one\u2019s own purposes and biases. This is what we call the prior. Whether or not we consciously use this prior, we are inherently involved, simply because observation is inextricably entangled with action. We must decide what actions to execute to steer things in the direction we desire.',
        'The first step is to distinguish between what we can and cannot do, conditioned on our environment. Depending on our interaction with the subject and the timing, we are left with either many options or none at all. Does having many options mean we are lucky? I don\u2019t know. But certainly, having no options is rarely ideal. When we do have choices, we are forced to ask: what should we choose? Why not the alternatives? And what are the consequences of taking one path over another? The most crucial question becomes: can we accept those consequences?',
        'Thinking about this gives me a headache. I consulted Ralf about what I should do. The people involved are entangled with one another, and everything about them is intertwined. I like good entanglements, not bad ones. However, I don\u2019t know how to transform a bad entanglement into a good one. Ralf suggested we should disentangle the situation by removing the unnecessary knots, and then untangle whatever remains. By starting at the exact point where the entanglement turned bad, the situation becomes much clearer.',
        <>I simply don{'\u2019'}t want to walk away from the entanglement, even though it is so messy. Or perhaps I am just afraid of the negative consequences my actions might bring. We could rely on trial and error. <em>{'\u201C'}Uncertainty is only diminished when we persist to the very end. Sometimes, we must simply act without overanalyzing. Disentangle action from overthinking! Embrace the uncertainty, and accept that the outcome might be unfavorable. That is simply what life is,{'\u201D'}</em> said Ralf. Maybe we should just trust our intuitions and follow our hearts.</>,
        "Dear reader, can we? Or perhaps we should reverse the question and instead ask: why can\u2019t we?"
      ]
    },
    {
      date: "2024-10-10",
      content: "Excited to launch my personal website! Started in 2022, " +
          "but put it on hold for 2 years, and now it's finally done."
    }
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="personal-notes">
      <h3>Here, I'm going to blog about things I'm learning and thinking about.</h3>
      {notes.map((note, index) => (
        <div key={index} className="note-entry">
          <p className="note-date">{note.date}</p>
          {note.title && <p className="note-title">{note.title}</p>}
          {Array.isArray(note.content)
            ? note.content.map((paragraph, i) => (
                typeof paragraph === 'object' && paragraph.quote
                  ? <blockquote key={i} className="note-quote">
                      <p>{paragraph.quote}</p>
                      {paragraph.author && <cite>— {paragraph.author}</cite>}
                    </blockquote>
                  : <p key={i} className="note-content">{paragraph}</p>
              ))
            : <p className="note-content">{note.content}</p>
          }
        </div>
      ))}
    </div>
  );
};

export default PersonalNotes;