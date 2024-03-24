import Image from "next/image"; 
import styles from "./about.module.css"; 

export default function About() {
  return (
    <main>
      <div className={styles.container}></div>
      <Image 
        src="/about.png"
        width={400}
        height={400}
        alt="About image"
        // fill
      />
    </main>
  )
}