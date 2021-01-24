import Navbar from "../src/components/nav-bar";

import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
