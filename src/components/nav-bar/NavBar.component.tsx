import Link from "next/link";
import style from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav className={style.navbar}>
      <div className={style.content}>
        <ul className={style.side}>
          <li>
            <Link href="/">
              <a>LOGO</a>
            </Link>
          </li>
        </ul>
        <ul className={style.side}>
          <li>
            <Link href="/soft">
              <a>Soft</a>
            </Link>
          </li>
          <li>
            <Link href="/professional">
              <a>Professional</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
