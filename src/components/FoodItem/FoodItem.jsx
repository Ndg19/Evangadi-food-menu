import { Component } from "react";
import Header from "../Header/Header.js";
import styles from "../FoodItem/FoodItem.module.css";
import AllFooditems from "../AllFoodItems/AllFooditems.jsx";
import menu from "../commonResource/data.js";

export default class FoodItem extends Component {
  render() {
    return (
      <div className={styles["all-container"]}>
        <Header />
        <div className={styles["foods-container"]}>
          {menu.map((menu) => {
            const { id ,title, category, img, price, desc } = menu;

            return (
              <AllFooditems
                key={id}
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
