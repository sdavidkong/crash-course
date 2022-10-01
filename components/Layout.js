import React from "react";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
          <h3>wooooop woooop</h3>
        </main>
      </div>
    </>
  );
};

export default Layout;
