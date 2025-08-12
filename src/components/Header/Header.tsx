import { Component } from "react";
import styles from"./Header.module.css"

export default class Header extends Component {
  render() {
    return (
      <div className={styles["all-container"]}>
        {/* header start */}
        <header className={styles["title"]}>
          <h1>Evangadi Menu</h1>
        </header>
      </div>
    );
  }
}
