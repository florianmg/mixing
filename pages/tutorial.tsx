import React from "react";

import Link from "next/link";
import Image from "next/image";

import style from "../styles/Tutorial.module.scss";

const Tutorial: React.FC = () => {
  return (
    <div className={style.tutorial}>
      <Link href="/soft">
        <a className={style["back-link"]}> {"< Go back"}</a>
      </Link>
      <p className={style.arian}>Step 1 :</p>
      <div className={style.step}>
        <div className={style.image}>
          <Image
            src="/website-exemple.gif"
            alt="First Step"
            width={320}
            height={188}
          />
        </div>
        <div className={style.content}>
          <p>Choose your colors.</p>
          <p>You can use original fimo colors as filter by clicking them.</p>
        </div>
      </div>
      <hr />
      <p className={style.arian}>Step 2 :</p>
      <div className={style.step}>
        <div className={style.image}>
          <Image src="/step2.png" alt="Second Step" width={300} height={280} />
        </div>
        <div className={style.content}>
          <p>
            Look for the fimo ID to be sure of the color and cut the good amount
            of fimo.
          </p>
        </div>
      </div>
      <hr />
      <p className={style.arian}>Step 3 :</p>
      <div className={style.step}>
        <div className={style.content}>
          <p>Blend It !</p>
          <p>Just blend it with your hands or you can use a machine.</p>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
