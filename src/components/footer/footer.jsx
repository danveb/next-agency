import Image from "next/image"; 
import styles from "./footer.module.css"; 

export default function Footer() {
  return (
    <main className={styles.container}>
      <div className={styles.text}>
        © All rights reserved – @danveb
      </div>
      <div className={styles.logo}>
        <Image 
          src="/code.svg"
          width={25}
          height={25}
          alt="default hero icon"
        />
      </div>
    </main>
  )
}