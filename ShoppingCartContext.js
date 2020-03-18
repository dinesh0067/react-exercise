import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = React.createContext();

export const ShoppingCartProvider = props => {
  
  const [prodState, setProdState] = useState([]); 
  
    useEffect(() => {
      fetch('http://api.jsoneditoronline.org/v1/docs/572180836c614dadb4b2eccdc3a33cbc/data?jsonp')
          .then(response => response.json())
          .then(json => {
            setProdState([...(json.response || {}).products])
          })
  }, []);

  // Initial values are obtained from the props  
  const {  
  counter: initialCounter,
  //cart: initialCart,
  //shoppingCart: initialShoppingCart,
  //prodState: initialProdState,
  //product: initialProduct,
  //children
  } = props;

  // Use State to keep the values
  const [counter, setCounter] = useState(initialCounter);
  //const [cart, setCart] = useState(initialCart);
  //const [shoppingCart, setShoppingCart] = useState(initialShoppingCart);
  //const [prodState, setProdState] = useState(initialProdState);
  //const [product, setProduct] = useState(initialProduct);

  // Make the context object:
  const shoppingContext = {
    counter,
    setCounter
  //  cart,
  //  setCart,
  //  shoppingCart,
  //  setShoppingCart,
  //prodState,
  //setprodState
  };
  
  // pass the value in provider and return
  return (
    <ShoppingCartContext.Provider value={[prodState, setProdState]}>
      {/* <div>"hello"{JSON.stringify(prodState)}</div> */}
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

 export const { Consumer } = ShoppingCartContext;

 ShoppingCartProvider.propTypes = {
//   products: PropTypes.array,
//   shoppingCart: PropTypes.array,
//   product: PropTypes.object,
   counter: PropTypes.number
 };

 ShoppingCartProvider.defaultProps = {
//   products: [],
//   shoppingCart:[],
//   product: {},
   counter: 0
 };
