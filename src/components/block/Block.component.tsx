import Bar from "../bar";

import style from "./Block.module.scss";

export default function Block({ color, bases, mixedId }) {
  const renderBars = ({ quantity, color }) => {
    let toRender = [];
    let indexBar = 0;
    for (let qty = quantity; qty > 0; qty = qty - 100) {
      const percent = qty > 100 ? 100 : qty;
      indexBar += 1;
      toRender.push(
        <Bar
          key={`bar-${mixedId}-${indexBar}`}
          color={color}
          fillPercent={percent}
        />
      );
    }

    return toRender;
  };

  return (
    <div style={{ backgroundColor: color }} className={style.block}>
      <p className={style["blend-ids"]}>
        {bases[0].fimoId} + {bases[1].fimoId}
      </p>
      <div className={style.content}>
        <div className={style.side}>
          {renderBars({ color: bases[0].color, quantity: bases[0].quantity })}
        </div>
        <p className={style.side}>+</p>
        <div className={style.side}>
          {renderBars({ color: bases[1].color, quantity: bases[1].quantity })}
        </div>
      </div>
    </div>
  );
}
