import React, {useState} from "react";
import Header from "./components/Header/Header";
import ListOfMeals from "./components/AvailableMeals/ListOfMeals";
import CartItems from "./components/Header/CartItems"
import CartProvider from "./components/Store/cart-provider";
import "./App.css" 

function App() {

  const [showCart, setCartShown] = useState(false)
 
  const showCartHandler = () => {
    setCartShown(true)
  };

  const hideCartHandler = () =>{
    setCartShown(false)
  }

  return (
   <React.Fragment>
    <CartProvider>
   <Header onShowCart={showCartHandler}/>
    { showCart && <CartItems onHideCart={hideCartHandler}/>}
    <ListOfMeals/>
    </CartProvider>
   </React.Fragment>
  );
}

export default App;
