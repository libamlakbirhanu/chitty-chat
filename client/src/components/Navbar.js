import React from "react";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <ul className={classes.navlist}>
        <li className={classes.navitem}>Home</li>
        <li className={classes.navitem}>About</li>
        <li className={classes.navitem}>Contact</li>
      </ul>
    </div>
  );
}
