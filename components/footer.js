import Link from "next/link";

import styles from "../public/scss/layout/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/mllosas/mllosas.com">
              Source
            </a>
          </li>
          <li>
            <a target="_blank" href="https://linkedin.com/in/mllosas/">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/mllosas">
              Github
            </a>
          </li>
        </ul>
        <div className={styles.copyright}>Built on Next.js © 2022</div>
      </div>
    </footer>
  );
}
