import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect, useRef } from "react";
import { GoMoveToTop } from "react-icons/go";

export default function Home() {
  const ref = useRef<HTMLSelectElement>(null);
  const navRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    ref.current!.querySelectorAll("h2").forEach((h2) => {
      h2.classList.add(`${styles["fade-in"]}`);
    });
    ref.current!.querySelectorAll("h1").forEach((h1) => {
      console.log(ref.current);
      h1.classList.add(`${styles["drop-down"]}`);
    });
    navRef.current!.querySelectorAll("a").forEach((a) => {
      a.classList.add(`${styles["fade-in"]}`);
    });

    navRef.current!.querySelectorAll("span").forEach((a) => {
      a.classList.add(`${styles["fade-in"]}`);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Tamar Sabbagh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav} ref={navRef}>
        <div className={styles.top}>
          <a href="#top" className={styles["nav-link"]}>
            <span className={styles["top-icon"]}>
              <GoMoveToTop />
            </span>
          </a>
          <a href="#top" className={styles["nav-link"]}>
            top
          </a>
        </div>
        <div className={styles.options}>
          <a href="#about" className={styles["nav-link"]}>
            about
          </a>
          <a href="#contact" className={styles["nav-link"]}>
            contact
          </a>
        </div>
      </nav>
      <main id="top" className={styles.main}>
        <section id="banner" className={styles.banner} ref={ref}>
          <div className={styles["banner-text"]}>
            <h1>
              I&apos;m <span className={styles.last}>Tamar Sabbagh</span>
            </h1>
            <h2>
              I need a new <span className={styles.last}>kidney.</span>
            </h2>
          </div>
          <Image
            src={"/profile.jpeg"}
            height={300}
            width={300}
            alt="picture of Tamar"
          ></Image>
        </section>
      </main>
      <section id="about" className={styles.section}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        illum odio aspernatur nisi cum deleniti aliquid, recusandae corrupti
        officiis tempora eveniet totam fugit consequatur obcaecati. Autem vero
        officiis similique nulla?
      </section>
      <section id="contact" className={styles.section}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        illum odio aspernatur nisi cum deleniti aliquid, recusandae corrupti
        officiis tempora eveniet totam fugit consequatur obcaecati. Autem vero
        officiis similique nulla?
      </section>
    </>
  );
}
