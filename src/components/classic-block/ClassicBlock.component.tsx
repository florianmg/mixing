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
      className={style["classic-block"]}
      style={
        selected
          ? { backgroundColor: color, borderColor: "red", borderStyle: "solid" }
          : { backgroundColor: color }
      }
    >
      <p className={style.text}>{blockKey}</p>
    </div>
  );
}
