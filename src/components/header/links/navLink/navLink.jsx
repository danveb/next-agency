"use client"

import Link from "next/link"; 
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({ item, setOpen }) {
  // usePathname (client component)
  // get the path so we know we're on the active path
  const pathname = usePathname(); 

  return (
    <main className={styles.container}>
      <Link 
        href={item.path}
        className={`${styles.container} ${pathname === item.path && styles.active} `}
        onClick={() => setOpen((prev) => !prev)}
      >{item.title}</Link>
    </main>
  )
}