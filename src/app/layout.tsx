'use client'
import "./globals.css";
import { ReactNode, useState } from "react";
import { MoneyContext } from "./context/MoneyContext";
import { TohumContext } from "./context/TohumContext";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [balance, setBalance] = useState(100);
  const [seeds, setSeeds] = useState<{ [key: string]: number }>({});

  return (
    <html lang="en">
      <body>
        <MoneyContext.Provider value={{ balance, setBalance }}>
          <TohumContext.Provider value={{ seeds, setSeeds }}>
            {children}
          </TohumContext.Provider>
        </MoneyContext.Provider>
      </body>
    </html>
  );
}
