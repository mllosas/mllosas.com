import styles from "../public/scss/pages/About.module.scss";

export default function About() {
  return (
    <div className={`${styles.aboutContent} content`}>
      <p>
        My name is Manuel, but I also go by Manny. I'm a Front-end developer
        with an eye for detail. I've worked with WordPress for over 7 years
        building responsive websites that look great on all types of devices and
        browsers.
      </p>
    </div>
  );
}
