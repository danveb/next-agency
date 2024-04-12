import Image from "next/image";
import Link from "next/link";
import styles from "./postcard.module.css";

export default function PostCard({ post }) {
  // destructure post from Blog
  return (
    <main className={styles.container}>
      <div className={styles.top}>
        {post.image && (
          <div className={styles.img__container}>
            <Image
              src={post.image}
              alt="post image"
              fill
              className={styles.img}
            />
          </div>
        )}
        <span className={styles.date}>03.27.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </main>
  );
}
