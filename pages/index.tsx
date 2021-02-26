import Link from "next/link";

import style from "../styles/Home.module.scss";

export default function Home() {
  return (
    <main className={style.home}>
      <div className={style.content}>
        <h1 className={style.title}>A blending guide for Fimo Soft</h1>
        <div className={style.cta}>
          <Link href="/soft">
            <a>Start blending</a>
          </Link>
        </div>
      </div>
    </main>
  );
}
