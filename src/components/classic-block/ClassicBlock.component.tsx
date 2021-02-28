import classnames from "classnames";

import style from "./ClassicBlock.module.scss";

export default function ClassicBlock({
  blockKey,
  color,
  selected,
  handleSelectFilter,
}) {
  return (
    <div
      key={blockKey}
      onClick={handleSelectFilter}
      className={classnames(style["classic-block"], {
        [style.selected]: selected,
      })}
      style={{ backgroundColor: color }}
    >
      <p className={style.text}>{blockKey}</p>
    </div>
  );
}
