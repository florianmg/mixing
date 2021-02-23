import React, { useState } from "react";

import ClassicBlock from "../src/components/classic-block";
import Block from "../src/components/block";

import { SoftPageProps } from "../src/types/pages.types";

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

const Soft: React.FC<SoftPageProps> = ({ originalClay, mixedClay }) => {
  const [originalClaySelected, setOriginalClaySelected] = useState([]);

  const checkIfIsSelected = (bases) => {
    if (originalClaySelected.length === 0) return true;
    return (
      originalClaySelected.includes(bases[0].fimoId) ||
      originalClaySelected.includes(bases[1].fimoId)
    );
  };

  const handleFilter = (fimoId) => {
    if (originalClaySelected[0] === fimoId) {
      setOriginalClaySelected([]);
    } else {
      setOriginalClaySelected([fimoId]);
    }
  };

  return (
    <>
      <div className={style.pageContainer} key="classic-page">
        <h3>Original Clay's</h3>
        <div className={style.originals}>
          {originalClay.map(({ color, fimoId }) => (
            <ClassicBlock
              key={fimoId}
              blockKey={fimoId}
              color={color}
              selected={originalClaySelected.includes(fimoId)}
              handleSelectFilter={() => handleFilter(fimoId)}
            />
          ))}
        </div>
        <div className={style["mix-container"]}>
          <h3>Mixed Clay</h3>
          <div className={style["mix-list"]}>
            {mixedClay.map(
              ({ color, bases, mixedId }) =>
                checkIfIsSelected(bases) && (
                  <Block
                    key={`mixed-${mixedId}`}
                    color={color}
                    bases={bases}
                    mixedId={mixedId}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Soft;
