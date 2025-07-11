"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { MoneyContext } from "@/app/context/MoneyContext";
import { TohumContext } from "@/app/context/TohumContext";
import styles from "./Store.module.css"
export default function StorePage() {
  const { balance, setBalance } = useContext(MoneyContext);
  const { seeds, setSeeds } = useContext(TohumContext);
  const router = useRouter();

  const [papatyaAdet, setPapatyaAdet] = useState(0);
  const papatyaPrice = 10;

  const [laleAdet, setLaleAdet] = useState(0);
  const lalePrice = 20;

  const handleBuy = (type: "Papatya" | "Lale", adet: number, price: number) => {
    const totalCost = adet * price;
    if (balance >= totalCost && adet > 0) {
      setBalance(balance - totalCost);
      setSeeds((prev) => ({
        ...prev,
        [type]: (prev[type] || 0) + adet,
      }));
      if (type === "Papatya") setPapatyaAdet(0);
      if (type === "Lale") setLaleAdet(0);
    } else {
      alert("Yetersiz bakiye veya adet seçilmedi!");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Marketplace</h1>

      <button onClick={() => router.push("/game")} className={styles.backButton}>
        Back to Game
      </button>

      <div className={styles.cardsWrapper}>

        <div className={styles.card}>
          <img src="/papatya.png" alt="Papatya" className={styles.image} />
          <h3>Papatya</h3>
          <p>${papatyaPrice}.00 / adet</p>
          <div className={styles.qtyControls}>
            <button onClick={() => setPapatyaAdet(Math.max(0, papatyaAdet - 1))}>-</button>
            <span>{papatyaAdet}</span>
            <button onClick={() => setPapatyaAdet(papatyaAdet + 1)}>+</button>
          </div>
          <p>Toplam: ${papatyaAdet * papatyaPrice}.00</p>
          <button
            className={styles.buyButton}
            onClick={() => handleBuy("Papatya", papatyaAdet, papatyaPrice)}
          >
            Tohum Al
          </button>
          <p>Stok: {seeds["Papatya"] || 0}</p>
        </div>

        
        <div className={styles.card}>
          <img src="/lale.png" alt="Lale" className={styles.image} />
          <h3>Lale</h3>
          <p>${lalePrice}.00 / adet</p>
          <div className={styles.qtyControls}>
            <button onClick={() => setLaleAdet(Math.max(0, laleAdet - 1))}>-</button>
            <span>{laleAdet}</span>
            <button onClick={() => setLaleAdet(laleAdet + 1)}>+</button>
          </div>
          <p>Toplam: ${laleAdet * lalePrice}.00</p>
          <button
            className={styles.buyButton}
            onClick={() => handleBuy("Lale", laleAdet, lalePrice)}
          >
            Tohum Al
          </button>
          <p>Stok: {seeds["Lale"] || 0}</p>
        </div>
      </div>

      <p className={styles.balance}>Bakiyeniz: ${balance}.00</p>
    </div>
  );
}
