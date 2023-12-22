import "./CartItems.css"

const CartItem = (props) => {


    return (
        <div className="cart-content">
        <div className="cart-item">
            <div className="cart-name">{props.name}</div>
            <div className="cart-price">{props.price} $</div>
            <div className="cart-amount">{props.amount}</div>
            <div className="cart-actions">  
                <button onClick={props.onAdd}>+</button>
                <button onClick={props.onRemove}>-</button>
            </div>
        </div>
    </div>
    )
}

export default CartItem;