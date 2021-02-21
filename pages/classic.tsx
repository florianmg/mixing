import React from "react";

import ClassicBlock from "../src/components/classic-block";
import GroupColor from "../src/components/group-color";

import { ClassicPageProps } from "../src/types/pages.types";

import style from "../styles/Classic.module.scss";

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/clays.json", {
    method: "GET",
    mode: "no-cors",
  });
  const { fimo, mixed } = await response.json();
  return {
    props: {
      originalClay: fimo,
      mixedClay: mixed,
    },
  };
}

const Classic: React.FC<ClassicPageProps> = ({ originalClay, mixedClay }) => {
  return (
    <div className={style.pageContainer} key="classic-page">
      <h3>Original Clay's</h3>
      <div className={style.originals}>
        {originalClay.map(({ color, fimoId }) => (
          <ClassicBlock key={fimoId} blockKey={fimoId} color={color} />
        ))}
      </div>
      <div className={style["mix-container"]}>
        <h3>Mixed Clay</h3>
        <div className={style["mix-list"]}>
          {mixedClay.map((items) => (
            <GroupColor
              mixedList={items}
              key={`group-color${items[0].mixedId}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classic;
