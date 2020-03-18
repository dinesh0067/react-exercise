import React,{ useState, useContext } from 'react'
import { ShoppingCartContext } from "./ShoppingCartContext";

const Cart = () => {
   // const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContext);
   const [prodState, setProdState]  = useContext(ShoppingCartContext);
    //const { cart, setCart, products } = cartContext;
    //console.log(products);
   // const item = products.products
    //const[min_list_price] = props    
    //const [min_list_price] = shoppingCart
   // const [products] = shoppingCart
   
    //const totalPrice = products.reduce((acc, product) => acc + product.min_list_price, 0);
    //console.log(JSON.stringify(props.productList,null,4));
    return (
        <div>
            <div className="_1HmYoV _35HD7C col-4-12 _3KsTU0" ignored-style="padding: 0px 0px 0px 16px;">
        <div className="bhgxx2 col-12-12">
            <div className="_3CKRe3">
                <div className="_13wOiu">
                    <span className="_2huYiT">Price details</span>
                    <div className="_2twTWD">
                        <div className="hJYgKM">
                            <div>Price ({prodState.length} items)
                            </div>
                        {/* <span> ₹{totalPrice}</span> */}
                        </div>
                        <div className="hJYgKM">
                            <div>Delivery Fee                                
                            </div>
                            <span><span className="_27kB8M _3Oa-sk">Free</span></span>
                        </div>
                        <div className="_3xFQAD">
                            <div className="hJYgKM">
                                <div>Total Payable                                    
                                </div>
                                {/* <span> ₹{totalPrice}</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="_22vQVX">You will save ₹5,000 on this order
                    </div>
                </div>
            </div>
        </div>
        <div className="_1HmYoV _35HD7C col-12-12" ignored-style="padding: 20px 0px 0px;">
            <div claclassNamess="bhgxx2 col-12-12">
                <div className="_3fGoeE">
                    <div className="_2YxCUy">Safe and Secure Payments.Easy returns.100% Authentic products.
                    </div>
                </div>
            </div>
        </div>
    </div>            
</div>
    )
}

export default Cart
