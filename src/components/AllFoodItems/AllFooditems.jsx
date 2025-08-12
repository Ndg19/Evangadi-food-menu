import { Component } from "react";
import styles from"../AllFoodItems/AllFoodItems.module.css";
// 1. Define props type
// interface AllFoodItemsProps {
//   img: string;
//   price: string | number;
//   title: string;
//   desc: string;
//   category:string
// }

// 2. Add props type to Component
export default class AllFooditems extends Component {
  render() {
    const { img, price, title, desc, category } = this.props;
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
          <div className={styles["food-desc"]}>{desc}</div>
        </div>
      </>
    );
  }
}