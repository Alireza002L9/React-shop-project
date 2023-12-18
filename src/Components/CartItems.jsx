import { useState } from "react";
import all_product from "../assets/all_product";
import removeIcon from "../assets/cart_cross_icon.png";
import './CartItems.css'

const CartItems = ({ cart, removeCart }) => {
    const [productCounts, setCount] = useState({})
    cart.forEach((productId) => {
        productCounts[productId] = (productCounts[productId] || 0) + 1;
    });
    return (
        <div className="cartItems">
            <div className="cart-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            {cart.length > 0 &&
                Array.from(new Set(cart)).map((productId) => {
                    const product = all_product.find(
                        (item) => item.id === productId
                    );
                    const [quantity, setQuantity] = useState(productCounts[productId])
                    const handleQuantity = ()=> {
                        if(quantity > 0){
                            setQuantity(quantity - 1)
                        }
                    }
                    if (product) {
                        return (
                            <div key={product.id}>
                                <div className="cartItems-format cart-main">
                                    <img
                                        className="cartProductIcon"
                                        src={product.image}
                                        alt={product.name}
                                    />
                                    <p>{product.name}</p>
                                    <p>${product.new_price}</p>
                                    <button className="cart-quantity">{quantity}</button>
                                    <p>${quantity * product.new_price}</p>
                                    <img src={removeIcon} onClick={handleQuantity} className="remove-itemIcon" />
                                </div>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
                <div className="cartItems-down">
                    <div className="cartItems-total">
                        <h1>Cart Totals</h1>
                        <div>
                            <div className="total-items">
                                <p>Subtatal</p>
                                <p>${0}</p>
                            </div>
                            <hr />
                            <div className="total-items">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="total-items">
                                <h3>Total</h3>
                                <h3>${0}</h3>
                            </div>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="promo">
                        <p>You have promo code? Enjoy the discount!</p>
                        <div className="promoBox">
                            <input type="text" placeholder="promo code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default CartItems;
