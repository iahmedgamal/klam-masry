import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div>
          <h2>word 1</h2>
        </div>
        <div>
          <h2>word 1</h2>
        </div>
        <div>
          <h2>word 1</h2>
        </div>
        <div>
          <h2>word 1</h2>
        </div>
      </div>
    </main>
  );
}
