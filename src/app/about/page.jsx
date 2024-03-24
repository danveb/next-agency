import Image from "next/image"; 
import styles from "./page.module.css"; 

const boxes = [
  {
    id: 1,
    title: "2K+",
    subtitle: "Devs worldwide",
  },
  {
    id: 2,
    title: "1000+", 
    subtitle: "Client hours",
  },
  {
    id: 3,
    title: "100%",
    subtitle: "On-time performance",
  },
];

export default function About() {
  return (
    <main className={styles.container}>
      <div className={styles.text__container}>
        <h1>We create digital ideas that are bigger, bolder, and braver than others. </h1>
        <p>An organization that promotes coding to the world. </p>
        <div className={styles.box__container}>
          {boxes.map((box) => (
            <div className={styles.box} key={box.id}>
              <h1>{box.title}</h1>
              <p>{box.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.img__container}>
        <Image 
          src="/about.png"
          alt="about image"
          width={500}
          height={500}
        />
      </div>
    </main>
  )
}