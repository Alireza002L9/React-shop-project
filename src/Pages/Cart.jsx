
import React from 'react'
import CartItems from '../Components/CartItems'
const Cart = ({ reM, cart }) => {
  // console.log(cart);
  console.log(reM);
  console.log(cart);
  // console.log(key);
  return (
    <div>
      <CartItems cart={cart} removeCart={reM} />
    </div>
  )
}

export default Cart