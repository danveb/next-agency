import PostCard from "@/components/postcard/postcard";
import styles from "./page.module.css";

export default function Blog() {
  return (
    <main className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </main>
  );
}
