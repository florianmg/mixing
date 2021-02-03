import classnames from "classnames";
import Bar from "../bar";

import style from "./Block.module.scss";

export default function Block({ blockKey, color }) {
  return (
    <div
      key={blockKey}
      style={{ backgroundColor: color }}
      className={style.block}
    >
      <div className={style.content}>
        <div className={style.side}>
          <Bar color="#FF0000" />
          <Bar color="#FF0000" />
          <Bar color="#FF0000" />
          <Bar color="#FF0000" />
        </div>
        <p className={style.side}>+</p>
        <div className={style.side}>
          <Bar color="#008000" />
          <Bar color="#008000" />
        </div>
      </div>
    </div>
  );
}
