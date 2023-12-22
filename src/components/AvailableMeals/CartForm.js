import {  useRef } from "react"
import "./MealItem.css"
import Input from "./Input";

const CartForm = (props) => {
    const inputRef = useRef("");
    const submitHandler = event => {
        event.preventDefault()
        const enteredAmount = inputRef.current.value;
        const enteredAmountNumber= +enteredAmount;

        if(enteredAmount.trim().lenght === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5)
        return
    
        props.onAddtoCart(enteredAmountNumber)
    }

    
    return (
        
        <form onSubmit={submitHandler} className="menu-btn">
            <Input
                 label=""
                 input={{
                    id: "amount",
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue : "1"
                 }}
                ref={inputRef}
            />
            <button className="menu-btn">Add</button> 
            </form>
        
    )
}

export default CartForm;