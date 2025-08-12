import { Component } from "react";
import Header from "../Header/Header.js";
import styles from "../AllFoodItems/AllFoodItems.module.css";
import AllFooditems from "../AllFoodItems/AllFooditems.jsx";
import menu from "../commonResource/data.js";

export default class FoodItem extends Component {
  render() {
    return (
      <div className={styles["all-container"]}>
        <Header />
        <div className={styles["foods-container"]}>
          {menu.map((menu) => {
            const { title, category, img, price, desc } = menu;

            return (
              <AllFooditems
                title={title}
                category={category}
                price={price}
                img={img}
                desc={desc}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
