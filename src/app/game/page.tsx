"use client";
import { useState } from "react";
import styles from "./Game.module.css"
import Tarla from "@/components/tarla";

type Props = {
  state: string
};
export default function GamePage() {
  const tarlas = Array.from({ length: 16 });
  const [balance, setBalance] = useState(100);

  const handlePlant = () => {
        setBalance(balance-5)
  }

  const handleHasat = (state : string) => {
        if(state === 'K'){
          setBalance(balance)
        }
        else if(state === 'Ç'){
            setBalance(balance+15)
        }
  }

  
  return (
    <div style={{ padding: 20 }}>
      <h1>Tarla Oyunu</h1>
        <h2>{balance}</h2>
      <div className={styles.cards}>
        {tarlas.map((_, index) => (
          <Tarla
            isHasat={handleHasat}
            isPlant={handlePlant}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
