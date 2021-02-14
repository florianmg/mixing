import Block from "../block";
import style from "./GroupeColor.module.scss";

const GroupColor = ({ mixedList }) => {
  return (
    <div className={style.container}>
      {mixedList.map(({ mixedId, color, bases }) => (
        <Block color={color} key={mixedId} bases={bases} />
      ))}
    </div>
  );
};

export default GroupColor;
