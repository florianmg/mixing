import style from "./ClassicBlock.module.scss";

export default function ClassicBlock({ blockKey, color }) {
  return (
    <div
      key={blockKey}
      className={style["classic-block"]}
      style={{ backgroundColor: color }}
    >
      <p className={style.text}>{blockKey}</p>
    </div>
  );
}
