import { createContext, useContext, useState } from 'react';

const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [currentEmoji, setCurrentEmoji] = useState('😊');

  const changeMood = newEmoji => {
    setCurrentEmoji(newEmoji);
  };

  return (
    <EmojiContext.Provider value={{ currentEmoji, changeMood }}>
      {children}
    </EmojiContext.Provider>
  );
};

export const useEmoji = () => {
  const context = useContext(EmojiContext);
  if (!context) {
    throw new Error('useEmoji must be used within an EmojiProvider');
  }
  return context;
};