import Bar from "../bar";

import style from "./Block.module.scss";

export default function Block({ color, bases }) {
  const renderBars = ({ quantity, color }) => {
    let toRender = [];

    for (let qty = quantity; qty > 0; qty = qty - 100) {
      const percent = qty > 100 ? 100 : qty;
      toRender.push(<Bar color={color} fillPercent={percent} />);
    }

    return toRender;
  };

  return (
    <div style={{ backgroundColor: color }} className={style.block}>
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
