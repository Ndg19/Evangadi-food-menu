import { Component } from "react";
import Header from "../Header/Header.js";
import AllFooditems from "../AllFoodItems/AllFooditems.jsx";
import menu from "../commonResource/data.js";

export default class FoodItem extends Component {
  render() {
    return (
      <div className="all-container">
        <Header />
        <div className="foods-container">
          
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
