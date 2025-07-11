'use client'
import { createContext } from "react";

type TohumCounts = {
  [key: string]: number;
};

type TohumContextType = {
  seeds: TohumCounts;
  setSeeds: React.Dispatch<React.SetStateAction<TohumCounts>>;
};

export const TohumContext = createContext<TohumContextType>({
  seeds: {},
  setSeeds: () => {},
});
