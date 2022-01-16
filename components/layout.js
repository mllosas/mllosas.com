import { useEffect } from "react";
import { useRouter } from "next/router";

import Header from "./header";
import Footer from "./footer";

import styles from "../public/scss/layout/Layout.module.scss";

export default function Layout({ children }) {
  const router = useRouter();
  const path = router.pathname.replace(/\//g, "");

  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
