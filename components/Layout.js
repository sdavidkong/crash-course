import React from "react";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
        <h3>wooooop woooop</h3>
      </main>
    </div>
  );
};

export default Layout;
