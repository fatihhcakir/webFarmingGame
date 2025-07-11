'use client'
import { createContext } from "react";

type MoneyContextType = {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
};

export const MoneyContext = createContext<MoneyContextType>({
  balance: 0,
  setBalance: () => {},
});
