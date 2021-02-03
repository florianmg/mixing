import { useEffect } from "react";

// import Block from "../src/components/block";
import ClassicBlock from "../src/components/classic-block";

import style from "../styles/Classic.module.scss";

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/originalClay.json", {
    method: "GET",
    mode: "no-cors",
  });
  const { fimo } = await response.json();
  return {
    props: {
      originalClay: fimo,
    },
  };
}

export default function Classic({ originalClay }) {
  return (
    <div className={style.pageContainer}>
      <p>Original Clay's</p>
      <div className={style.originals}>
        {originalClay.map(({ color, fimoId }) => (
          <ClassicBlock blockKey={fimoId} color={color} />
        ))}
      </div>
    </div>
  );
}
