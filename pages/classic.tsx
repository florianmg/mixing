import React from "react";

import Block from "../src/components/block";
import ClassicBlock from "../src/components/classic-block";

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
      <p>Original Clay's</p>
      <div className={style.originals}>
        {originalClay.map(({ color, fimoId }) => (
          <ClassicBlock blockKey={fimoId} color={color} key={fimoId} />
        ))}
      </div>
      <div>
        {mixedClay.map(({ mixedId, color }) => (
          <Block color={color} key={mixedId} />
        ))}
      </div>
    </div>
  );
};

export default Classic;
