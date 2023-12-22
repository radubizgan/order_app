import React, { useContext,useState } from "react";
import "./CartItems.css"
import CartContext from "../Store/cart-context";
import CartItem from "./CartItem";
import CheckOutForm from "./CheckOutForm";



const CartItems = (props) => {
   const [checkedOut, setCheckedOut] = useState(false);
   const [orderSent, setOrderSent] = useState(false)

    const ctx = useContext(CartContext)
    const totalPriceAmount = ctx.totalAmount

    const submitHandler =  async (userData) => {
        await fetch ("https://react-http-563d3-default-rtdb.europe-west1.firebasedatabase.app/neworders.json", {
            method: "POST",
            body: JSON.stringify({
                user: userData,
                orderItems: ctx.items
            })
        })
        .then(response => {
            if(!response.ok) {
                throw new Error ("Something went wrong!")
            }
        })
        ctx.clearItem()
        setOrderSent(true)
        setCheckedOut(false)
        }
    

    const ItemsInCart = (
        <ul>
            {ctx.items?.map((item) => (
                <CartItem
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onAdd={() => ctx.addItem(item)}
                    onRemove={() => ctx.removeItem(item.id)} />
            ))}
        </ul>
    );

    const orderHandler = () => {
        setCheckedOut(true)
    }

    const cartActions = (
        <div className="cart-total">
            <div className="cart-total-price"> Total : {totalPriceAmount} $</div>
            <div className="cart-total-actions">
                <button onClick={props.onHideCart}>Cancel</button>
                <button onClick={orderHandler}>Order</button>
            </div>
        </div>
    );

    const didSubmitCartData = 
    <React.Fragment>
        <p>Order was sent successful</p>
        <div >
            <button
                onClick={props.onHideCart}
               >Close</button>
          </div>
    </React.Fragment>

    return (
        <div className="backdrop">
            <div className="cart-wrapper">
                {ItemsInCart}
                {!orderSent && !checkedOut && cartActions}
                { checkedOut && <CheckOutForm 
                    closeCart={props.onHideCart}
                    onConfirm={submitHandler} /> }
                {orderSent && didSubmitCartData}
            </div>
        </div>
    );
};

export default CartItems;