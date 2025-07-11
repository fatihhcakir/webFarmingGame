'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

const GameContext= createContext(undefined)
const context = useContext(GameContext)

export const GameProvider = ({ children }) => {
  const [balance, setBalance] = useState(100);

  return (
    <GameContext.Provider value={{ balance, setBalance }}>
      {children}
    </GameContext.Provider>
  );
};