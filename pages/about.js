import styles from "../public/scss/pages/About.module.scss";

export default function About() {
  return (
    <div className={`${styles.aboutContent} content`}>
      <p>
        I'm a Front-End Developer located in Miami, Florida. I've gained most of
        my experience working with WordPress and Front-End technlogies like
        HTML, CSS, and Javascript. I believe in developing beautiful and
        functional websites that are intuitive and provide dynamic user
        experiences.
      </p>
      <p>
        I consider myself a problem solver, well-organized, and an independent
        person with high attention to detail, and am interested in working on
        ambitious projects with positive people.
      </p>
      <p>
        Want to talk? <a href="#">Contact Me!</a>
      </p>
    </div>
  );
}
