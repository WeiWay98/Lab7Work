import React from 'react';
import { useEmoji } from '../contexts/EmojiContext'; // Adjust the import path

function Emoji() {
  const { currentEmoji, changeMood } = useEmoji();

  return (
    <div className="Emoji componentBox">
      <h3>Current Emoji</h3>
      <p>{currentEmoji}</p>
      <button onClick={() => changeMood('🚀')}>Change Mood</button>
    </div>
  );
}

export default Emoji;