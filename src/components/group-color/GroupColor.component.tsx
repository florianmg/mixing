import Block from "../block";
import style from "./GroupeColor.module.scss";

const GroupColor = ({ mixedList }) => {
  return (
    <div className={style.container}>
      {mixedList.map(({ mixedId, color, bases }) => (
        <Block key={mixedId} color={color} bases={bases} mixedId={mixedId} />
      ))}
    </div>
  );
};

export default GroupColor;
