import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="A portfolio of software developer work."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Victor Nestor</h1>
        <p className={styles.description}>This portfolio was made using Next.js!</p>

        <div className={styles.grid}>
          <a
            href="https://github.com/VNestor"
            className={styles.card}
            rel="noreferrer"
            target="_blank"
          >
            <h2>GitHub</h2>
            <p>Take a look at what I have made!</p>
          </a>

          <a
            href="https://www.linkedin.com/in/vnestor"
            className={styles.card}
            rel="noreferrer"
            target="_blank"
          >
            <h2>LinkedIn</h2>
            <p>Connect with me professionally and learn about my background.</p>
          </a>

          <a
            href="https://vnestor.github.io/personal-blog/"
            className={styles.card}
            rel="noreferrer"
            target="_blank"
          >
            <h2>Personal Blog</h2>
            <p>Read about the tools I have worked with and the stuff I have learned!</p>
          </a>
          
        </div>
      </main>

      <footer className={styles.footer}>Powered by Developers Like You!</footer>
    </div>
  );
};

export default Home;
