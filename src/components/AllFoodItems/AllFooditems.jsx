import { Component } from "react";
import styles from "../AllFoodItems/AllFoodItems.module.css";

export default class AllFooditems extends Component {
  render() {
    const { title, category, price, img, desc, maxLength = 250 } = this.props;
    // console.log(this.props);
    // Shorten description if longer than maxLength using ternary oprator
    const shortDesc =
      desc.length > maxLength ? desc.slice(0, maxLength) + "..." : desc;
    return (
      <>
        <div className={styles["single-food"]}>
          <div className={styles["img"]}>
            <img src={img} alt={title} />
          </div>
          <div className={styles["title-price"]}>
            <h3>{title}</h3>
            <h3>{category}</h3>
            <p>{price}</p>
          </div>
          <div className={styles["food-desc"]}>{shortDesc}</div>
        </div>
      </>
    );
  }
}
