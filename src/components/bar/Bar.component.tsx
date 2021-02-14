import style from "./Bar.module.scss";

export default function Bar({ color, fillPercent }) {
  return (
    <div className={style.bar}>
      <div
        style={{ backgroundColor: color, height: `${fillPercent}%` }}
        className={style["bar-progress"]}
      />
    </div>
  );
}
