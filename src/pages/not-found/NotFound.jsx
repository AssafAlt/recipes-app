import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css"; // Import the styles

function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>404</h1>
        <p className={styles.subheading}>Page Not Found</p>
        <p className={styles.description}>
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link to="/" className={styles.button}>
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
