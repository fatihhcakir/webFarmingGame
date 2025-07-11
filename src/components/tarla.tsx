"use client";
import { useState, useContext } from "react";
import styles from "./Tarla.module.css";
import { MoneyContext } from "@/app/context/MoneyContext";
import { TohumContext } from "@/app/context/TohumContext";

type Props = {
  index: number;
};

export default function Tarla({ index }: Props) {
  const { balance, setBalance } = useContext(MoneyContext);
  const { seeds, setSeeds } = useContext(TohumContext);
  const [state, setState] = useState<"empty" | "T" | "F" | "B" | "Ç" | "K">("empty");
  const [type, setType] = useState<"Papatya" | "Lale" | null>(null);

  const handleClick = () => {
    if (state === "empty") {
      if (seeds["Papatya"] > 0) {
        setSeeds({ ...seeds, Papatya: seeds["Papatya"] - 1 });
        setType("Papatya");
        setState("T");
        setTimeout(() => setState("F"), 2000);
        setTimeout(() => setState("B"), 4000);
        setTimeout(() => setState("Ç"), 6000);
        setTimeout(() => setState("K"), 10000);
      } else if (seeds["Lale"] > 0) {
        setSeeds({ ...seeds, Lale: seeds["Lale"] - 1 });
        setType("Lale");
        setState("T");
        setTimeout(() => setState("F"), 2000);
        setTimeout(() => setState("B"), 4000);
        setTimeout(() => setState("Ç"), 6000);
        setTimeout(() => setState("K"), 10000);
      } else {
        alert("Hiç tohumunuz yok!");
      }
    } else if (state === "K") {
      if (type === "Papatya") {
        setBalance(balance); 
      } else if (type === "Lale") {
        setBalance(balance); 
      }
      setState("empty");
      setType(null);
    }
    else if (state === "Ç") {
      if (type === "Papatya") {
        setBalance(balance+10); 
      } else if (type === "Lale") {
        setBalance(balance+20); 
      }
      setState("empty");
      setType(null);
    }
  };

  return (
    <div onClick={handleClick} className={styles.tarlas}>
      {state === "empty" ? "" : state}
    </div>
  );
}
