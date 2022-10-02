import headerStyles from "../styles/Header.module.css";

import React from "react";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> Newz
      </h1>
      <p className={headerStyles.description}>Get your latest news here!</p>
    </div>
  );
};

export default Header;
