import React, { useState, useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";

const Counter = (props) => {
  //const [products, setProducts] = useState(props);
  //console.log(JSON.stringify(products.products.mi));
  //const [{min_list_price}] = props.products
  const counterContext  = useContext(ShoppingCartContext);
  //const [counter, setCounter] = useState(0);
  const [counter, setCounter] = counterContext
  //const [counter, setCounter] = useState(0);
  const isEnabled = counter > 0;  
//  const [total, setTotal] = useState(shoppingCart.products.reduce(reduce, 0));

  const addToCart = () => { 
    //const prod = { min_list_price: props.prodList.min_list_price };
    //setShoppingCart(currentState => [...currentState, prod]);
    setCounter(counter + 1)
    setCounter(currentState => [...currentState, counter]);
    // setShoppingCart(currentState => {
    //     currentState.products[index].min_list_price = min_list_price;
    //     return {
    //       ...currentState
    //     };
    //   });
    // setTotal(shoppingCart.products.reduce(reduce, 0));
  }
  const removeFromCart = () => {
    setCounter(counter - 1)
    setCounter(currentState => [...currentState, counter]);
  };

  return (
    <div>
      <div className="_3RkJty">
        <div className="_3md1dr">
        <button  className="wNrY5O" disabled={!isEnabled} onClick={removeFromCart}>
          {/* <button
            className="wNrY5O"
            disabled={!isEnabled}
            onClick={() => setCounter(counter - 1)} */}
          
            {" "}
            –{" "}
          </button>
          <div className="_2zH4zg">
            <input type="text" value={counter} className="_2csFM9" />
          </div>
          <button className="wNrY5O" onClick={addToCart}>
          {/* <button className="wNrY5O" onClick={() => setCounter(counter + 1)}> */}
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
