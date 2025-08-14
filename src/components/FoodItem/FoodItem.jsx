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
          {/* optional chaining */}
          {menu?.map((menu) => {
            const { id, title, category, img, price, desc } = menu;
            // console.log(menu);
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
// key points
// 1. Optional Chaining (?.)     Safely tries to run .map() only if menu is not null or undefined.
// 2. map() Method  :Loops through each menu item and returns a new list of <AllFooditems /> components.
// 3. Destructuring Assignment: Extracts specific properties from menu into variables in one line.
// 4. Passing Props to Child  : Sends data from the parent component to the child component (AllFooditems) using attributes.
// 5. Component Import & Usage  AllFooditems is a custom component created/imported.
// 6. Spread Operator (...)   Expands all properties of an object into individual props.  <AllFooditems key={id} {...menu} />
// 7. Ternary Operator (? :) Shorthand for if...else in expressions.
