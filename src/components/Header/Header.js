import React from "react"
import "./Navbar.css"



const Header = (props) => {
  

 

    return (
        <section>
        <header className="header">
          <div className="nav-bar">
            <button onClick={props.onShowCart} className="shop-cart">Cart Items</button>
          </div>
          <div className="description">
            <p>Welcome to Savory Delights, where culinary excellence meets warm hospitality. Our restaurant invites you on a delightful journey of flavors, prepared with passion and served with a touch of elegance. Let us take you on a culinary adventure that celebrates the art of food and the joy of dining.</p>
          </div>
        </header>

      </section>
    )
}

export default Header