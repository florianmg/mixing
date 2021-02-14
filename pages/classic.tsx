import React, { useEffect } from "react";

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
    <div className={style.pageContainer}>
      <h3>Original Clay's</h3>
      <div className={style.originals}>
        {originalClay.map(({ color, fimoId }) => (
          <ClassicBlock blockKey={fimoId} color={color} key={fimoId} />
        ))}
      </div>
      <div className={style["mix-container"]}>
        <h3>Mixed Clay</h3>
        <div className={style["mix-list"]}>
          {mixedClay.map((items) => (
            <GroupColor mixedList={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classic;
