"use client"

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const links = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
  },
];

export default function Links() {
  // useState 
  const [open, setOpen] = useState(false); 

  // TEMP
  // if authenticated we'll check if admin and see Admin path, and Logout button 
  // if not authenticated we automatically get a Link to login
  const authenticated = true; 
  const isAdmin = true; 

  return (
    <main className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.id} />
        ))} 
        {authenticated ? (
          <>
          { isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} /> }
          <button className={styles.logout}>Logout</button>
          </>        
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>MENU</button>
      {open && <div className={styles.mobileLinks}>
        {links.map((link) => (
          <NavLink item={link} key={link.id} />
        ))}
        </div>
      }
    </main>
  )
}