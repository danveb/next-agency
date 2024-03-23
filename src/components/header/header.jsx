import Links from "./links/links";
import styles from "./header.module.css";

export default function Header() {
  return (
    <main className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div>
        <Links />
      </div>
    </main>
  )
}