import style from "./Bar.module.scss";

export default function Bar({ color }) {
  return <div style={{ backgroundColor: color }} className={style.bar} />;
}
