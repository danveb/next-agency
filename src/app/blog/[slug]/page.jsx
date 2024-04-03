import Image from "next/image";
import styles from "./page.module.css";

export default function BlogPost() {
  return (
    <main className={styles.container}>
      <div className={styles.img__container}>
        <Image src="" alt="" fill className={styles.img} />
      </div>
      <div className={styles.text__container}>
        <h1>Title</h1>
        <div className={styles.detail__container}>
          <Image
            src=""
            alt=""
            height={50}
            width={50}
            className={styles.avatar}
          />
          <div className={styles.detail__text}>
            <span className={styles.detail__title}>Author</span>
            <span className={styles.detail__value}>Terry Jefferson</span>
          </div>
          <div className={styles.detail__text}>
            <span className={styles.detail__title}>Published</span>
            <span className={styles.detail__value}>01.03.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          voluptatibus commodi saepe, minus explicabo maxime animi pariatur
          veritatis, iusto nulla numquam laborum eaque repellendus et
          reprehenderit fugit! Possimus, ipsa dolore?
        </div>
      </div>
    </main>
  );
}
