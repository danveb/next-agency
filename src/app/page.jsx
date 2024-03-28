import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.text__container}>
        <h1>Create Code Agency.</h1>
        <p>
          We are proud to be on the of the leading organizations to connect
          coders worldwide. Discover our innovative solutions, harnessing the
          latest technologies to elevate your digital presence.
        </p>
        <div className={styles.button__container}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact Us</button>
        </div>
      </div>
      <div className={styles.img__container}>
        <Image
          src="/hero.png"
          alt="hero image"
          fill
          sizes="(max-width: 1200px) 30vw, 20vw" // TODO...
          className={styles.hero__img}
        />
      </div>
    </main>
  );
}
