import React from "react";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
          <h3>wooooop woooop</h3>
        </main>
      </div>
    </>
  );
};

export default Layout;
