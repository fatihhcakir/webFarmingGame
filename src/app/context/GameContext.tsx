'use client';
import { createContext, useContext, useState, ReactNode } from "react";

const GameContext = createContext<any>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [balance, setBalance] = useState(100);

  const isPlant = () => {
    setBalance(prev => prev - 5);
  };

  const isHasat = (state: string) => {
    if (state === 'K') {
      setBalance(prev => prev);
    } else if (state === 'Ç') {
      setBalance(prev => prev + 15);
    }
  };

  return (
    <GameContext.Provider value={{ balance, isPlant, isHasat }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
