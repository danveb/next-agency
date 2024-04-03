import Image from "next/image";
import Link from "next/link";
import styles from "./postcard.module.css";

export default function PostCard() {
  return (
    <main className={styles.container}>
      <div className={styles.top}>
        <div className={styles.img__container}>
          <Image src="" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>03.27.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          consectetur veniam, officia, aut sit enim ducimus molestiae,
          aspernatur cumque rem earum harum quia. Qui fugiat magnam iure, enim
          maxime sint.
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </main>
  );
}
