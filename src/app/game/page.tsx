"use client";
import { useRouter } from "next/navigation";
import styles from "./Game.module.css";
import Tarla from "@/components/tarla";
import { useContext } from "react";
import { MoneyContext } from "../context/MoneyContext";
import { TohumContext } from "../context/TohumContext";

export default function GamePage() {
  const tarlas = Array.from({ length: 16 });
  const router = useRouter();

  const { balance } = useContext(MoneyContext);
  const { seeds } = useContext(TohumContext);

  return (
    <div style={{ padding: 20 }}>
      <h1>Tarla Oyunu</h1>
      <h2>Bakiye: {balance}</h2>

      <button
        onClick={() => router.push("/store")}
        style={{
          padding: "8px 16px",
          marginBottom: "16px",
          background: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Store'a Git
      </button>

      <div style={{ marginBottom: "16px" }}>
        <h3>Tohumlar:</h3>
        <p>Papatya: {seeds["Papatya"] || 0}</p>
        <p>Lale: {seeds["Lale"] || 0}</p>
      </div>

      <div className={styles.cards}>
        {tarlas.map((_, index) => (
          <Tarla key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
