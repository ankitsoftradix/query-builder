import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Query Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      hello grin
    </div>
  );
}
