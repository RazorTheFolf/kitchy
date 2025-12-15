import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className={styles.error_main}>
      <h1 className={styles.error_code}>404</h1>
      <p className={styles.error_desc}>There is nothing to see here 👀</p>
      <Link to="/">Go Back Home</Link>
    </main>
  );
}
