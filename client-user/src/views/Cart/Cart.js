import React from 'react';
import './Cart.css';
import CartEmpty from './CartEmpty';
import CartExists from './CartExists';
const Cart = (props) => {

  let removeCart = (childData) => {
    props.totalItem(childData);
  }

  return (
    <section className="content my-3">
      <div className="container">
        <div className="cart-page bg-white">
          <div className="row">
            { localStorage.getItem('cart') ? (<CartExists callBackRemoveCart={removeCart} />) : (<CartEmpty />) }
          </div>
        </div>
      </div>
    </section>

  )
}

export default Cart;
