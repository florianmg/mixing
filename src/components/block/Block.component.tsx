import { useState, useEffect } from "react";

import Bar from "../bar";

import style from "./Block.module.scss";

export default function Block({ color, bases }) {
  const [baseLeftQuantity, setBaseLeftQuantity] = useState(0);
  const [baseRightQuantity, setBaseRightQuantity] = useState(0);

  useEffect(() => {
    const leftQuantity = bases[0];
    const rightQuantity = bases[0];

    setBaseLeftQuantity(leftQuantity);
    setBaseRightQuantity(rightQuantity);
  }, []);
  return (
    <div style={{ backgroundColor: color }} className={style.block}>
      <div className={style.content}>
        <div className={style.side}>
          <Bar color={bases[0].color} />
        </div>
        <p className={style.side}>+</p>
        <div className={style.side}>
          <Bar color={bases[1].color} />
        </div>
      </div>
    </div>
  );
}
