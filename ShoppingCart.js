import React, {useState, useEffect, useContext } from 'react';
import Counter from "./Counter";
import Cart from "./Cart";
import { ShoppingCartContext } from "./ShoppingCartContext";

const ShoppingCart = () => {
    const [prodState, setProdState]  = useContext(ShoppingCartContext);
    const reduce = (total, defaultValue) => {
        return parseInt(total) + parseInt(defaultValue.min_list_price);
      };
    //   console.log(JSON.stringify(prodState,null,4))
    //   console.log(prodState.products.length);
         const [count, setCount] = useState(0);    
    //  const [total, setTotal] = useState(prodState.products.reduce(reduce, 0));
    //const { product, products, setProducts } = productContext;
    //const [prodState, setProdState] = useContext(ShoppingCartContext);
    // const [products, setProducts] = useState([]);
    // const getTotalSalary = (totalSalary, value) => {
    //     return parseInt(totalSalary) + parseInt(value.min_list_price);
    // };
    const addToCart = (addItem, flag) => { 
        setProdState({ products: [...prodState.products, addItem] });
        //setTotal(prodState.products.reduce(reduce, 0));
        setCount(prodState.length);        
        
        // setCounter(counter + 1)
        // setShoppingCart(currentState => [...currentState, counter]);       
      }
    // useEffect(() => {
    //     fetch('http://api.jsoneditoronline.org/v1/docs/572180836c614dadb4b2eccdc3a33cbc/data?jsonp')
    //         .then(response => response.json())
    //         .then(json => {
    //             setProducts([...(json.response || {}).products])
    //         })
    // }, []);

    return (
        <div>
            {/* <div>"hello"{JSON.stringify(products)}</div>; */}
            <div className="_1HmYoV hCUpcT col-12-12">
            
            <div className="_1HmYoV _35HD7C" ignored-style="flex-grow: 1; overflow: visible;">
    <div className="_1HmYoV _35HD7C col-12-12" ignored-style="box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;">
        <div className="_1HmYoV hCUpcT col-12-12" ignored-style="background-color: rgb(255, 255, 255);">
            <div className="bhgxx2 col-3-12">
                <div className="_2EoEbp">
                    <div className="_1lBhq8">My Cart ({count})</div>
                    <div></div>
                </div>
            </div>
            <div className="bhgxx2 col-9-12" ignored-style="margin: 5px 10px 0px 0px;">
                <div className="_2KHWIh _3yhhU7 _1nhGgC" ignored-style="float: right;">
                    <div className="_29cQtz"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==" className="_3KEg0q"/><span className="_1nBnpg">Deliver to</span></div>
                    <div className="_2FexNG OmFqo5"><input type="text" placeholder="Enter delivery pincode" value="" maxLength="6" autoComplete="off" className="_20PCkk"/><span className="_2m9c-p _3PnL67">Check</span></div>
                </div>
            </div>
        </div>
        {
            prodState.map(({
                product_short_description,
                productid,
                min_list_price, 
                product_long_description, 
                product_name, 
                min_offer_price, 
                imageUrl : [imagePath], 
                favoritedcount
            }) => (
                <div className="bhgxx2 col-12-12" key = {productid}>
                <div className="_3ycxrs _2Rwa71">
                    <div className="PaJLWc"><a href="/realme-c3-frozen-blue-32-gb/p/itm58bf81a807d66?pid=MOBFZHC5HAGKGBBW&amp;lid=LSTMOBFZHC5HAGKGBBWJH2HLH&amp;marketplace=FLIPKART">
                            <div className="_3BTv9X" ignored-style="height: 112px; width: 112px;"><img width="112" height ="112" alt="" src={imagePath}/></div>
                        </a>
                        <div className="_3vIvU_">
                            <div className="_1Ox9a7"><a className="_325-ji _3ROAwx" href="/realme-c3-frozen-blue-32-gb/p/itm58bf81a807d66?pid=MOBFZHC5HAGKGBBW&amp;lid=LSTMOBFZHC5HAGKGBBWJH2HLH&amp;marketplace=FLIPKART">{product_name}</a></div>
                            <div className="v7-Wbf"> {product_short_description} </div>
                            <div className="_2EitLy">Seller: Vision Star<img className="_3H62tS" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png"/></div><span className="pMSy0p XU9vZa">₹{min_list_price}</span><span className="pMSy0p LYRnr_">₹{min_offer_price}</span><span className="hMGTLH">12% Off</span>
                            <div className="c8yCDe">
                                <div className="_1YoKa3" id="offers-LSTMOBFZHC5HAGKGBBWJH2HLH">4 offers available<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" className="_3p6_km">
                                        <g fill="none">
                                            <path d="M-1-1h16v16H-1"></path>
                                            <path d="M7 0C3.136 0 0 3.136 0 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm.7 10.5H6.3V6.3h1.4v4.2zm0-5.6H6.3V3.5h1.4v1.4z" fill="#388e3c" className=""></path>
                                        </g>
                                    </svg></div>
                            </div>
                        </div>
                        <div className="aCNg3Z">
                            <ul className="_1OKOUv">
                                <li className="_3ErF0Y">
                                    <div className="bzD9az">Delivery by Mon Mar 16 | <span className="_3ACFa6"><span className="_3o5jSD">Free</span></span><span className="_3ACFa6 _1wJt4G">₹80</span></div>
                                </li>
                            </ul>
                            <ul className="_2103ss">
                                <li><span>10 Days Replacement Policy</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="_3cto0P _2Mq1yq">
                        <div className="_3RkJty">
                            <div className="_3md1dr">
                            <Counter />
                            </div>
                        </div>
                        <div className="_3IO2ev _2K02N8 _2x63a8">
                            <div className="gdUKd9">Save for later</div>
                            <div className="gdUKd9">Remove</div>
                        </div>
                    </div>
                </div>
            </div>
            

            ))
        }
        </div>
        <div className="bhgxx2 col-12-12 _3KsTU0">
            <div className="_31gTpz _1RLi8m">
                <form method="post" action="https://www.flipkart.com/checkout/init?loginFlow=true"><input type="hidden" name="domain" value="physical"/><button className="_2AkmmA iwYpF9 _7UHT_c"><span>Place Order</span></button></form>
            </div>
        </div>
    </div>
</div>
{/* <Cart
        products={products}/> */}
      
      
      
      {/* { <Counter 
      product={product} /> } */}
        
        
    

</div>

    )
}



export default ShoppingCart

