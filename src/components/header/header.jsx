import Image from "next/image"; 
import Link from "next/link"; 
import Links from "./links/links";
import code from "../../../public/code.svg"; 
import styles from "./header.module.css";

export default function Header() {
  return (
    <main className={styles.container}>
      <Link href="/">
        <Image 
          src={code}
          width={35}
          height={35}
          alt="default hero icon"
        />
      </Link>
      <div>
        <Links />
      </div>
    </main>
  )
}