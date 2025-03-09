"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.scss";
export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.navigation}>
      <Link href="/" className={`${styles.link} ${pathname === "/" ? styles.linkActive : ""}`}>
        Strona Główna
      </Link>
      <Link href="/page1" className={`${styles.link} ${pathname === "/page1" ? styles.linkActive : ""}`}>
        O nas
      </Link>
      <Link href="/page2" className={`${styles.link} ${pathname === "/page2" ? styles.linkActive : ""}`}>
        Kontakt
      </Link>
    </nav>
  );
};
