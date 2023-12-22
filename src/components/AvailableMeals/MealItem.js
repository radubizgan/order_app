import React, {  useContext } from "react"
import "./MealItem.css"
import CartContext from "../Store/cart-context";

import CartForm from "./CartForm";

const MealItem = (props) => {
  
  const ctx = useContext(CartContext);

  const addToCartHandler = (amount) => {

      ctx.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
        amount: amount
      })
      
  }

  

    return (
        <div className="menu-item">
          <div>{props.name}</div>
          <div className="menu-price">{props.price}$</div>
          <CartForm  
          onAddtoCart={addToCartHandler}/>
        </div>
      ) 
}

export default MealItem;