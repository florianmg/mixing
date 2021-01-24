import style from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav className={style.navbar}>
      <ul className={style.side}>
        <li>LOGO</li>
      </ul>
      <ul className={style.side}>
        <li>Classic</li>
        <li>Professionnal</li>
      </ul>
    </nav>
  );
}
