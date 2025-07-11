// components/Tile.tsx
'use client';
import { useState } from 'react';
import styles from "./Tarla.module.css"

type Props = {
  index: number;
  isHasat: (state: string) => void;
  isPlant: () => void;
};

export default function Tarla({ index, isPlant, isHasat }: Props) {
  const [state, setState] = useState<'empty' | 'T' | 'B' | 'Ç' | 'K'>('empty');

  const handleClick = () => {
    if (state === 'empty') {
      setState('T');
      isPlant();
      setTimeout(()=>setState('B'),2000)
      setTimeout(()=>setState('Ç'),4000)
      isHasat(state)
      setTimeout(()=>setState('K'),8000)
    }
    else if (state === 'K') {
      isHasat(state)
      setState('empty');
    }
    else if (state === 'Ç') {
      isHasat(state)
      setState('empty')
    }

  };


  return (
    <div
      onClick={handleClick}
      className={styles.tarlas}
    >
      {state}
    </div>
  );
}
