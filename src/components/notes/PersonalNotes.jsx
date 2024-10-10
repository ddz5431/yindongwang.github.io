import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PersonalNotes.scss'

const PersonalNotes = () => {
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const notes = [
    {
      date: "2024-10-10",
      content: "Excited to launch my personal website! Started in 2022, " +
          "but put it on hold for 2 years, and now it's finally done."
    }
    // {
    //   date: "2024-03-10",
    //   content: "Just finished 'The Alignment Problem' by Brian Christian. Crucial read for anyone in AI ethics."
    // },
    // {
    //   date: "2024-03-05",
    //   content: "Brainstorming ideas for my next NLP project. Thinking about exploring low-resource languages..."
    // },
    // {
    //   date: "2024-02-28",
    //   content: "Attended a fascinating seminar on quantum computing applications in AI. So much to learn!"
    // },
    // {
    //   date: "2024-02-20",
    //   content: "Weekend plans: Hiking and then diving into the latest papers on few-shot learning. Work-life balance is key!"
    // }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNoteIndex((prevIndex) => (prevIndex + 1) % notes.length);
    }, 10000); // Change note every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="personal-notes"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>Here, I'm going to blog about things I'm learning and thinking about.</h3>
      <AnimatePresence mode="wait">  {/* Updated here */}
        <motion.div
          key={currentNoteIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="note-date">{notes[currentNoteIndex].date}</p>
          <p className="note-content">{notes[currentNoteIndex].content}</p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default PersonalNotes;