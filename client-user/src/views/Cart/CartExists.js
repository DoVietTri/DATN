import React, { useEffect, useState } from 'react';
import ItemCart from './../../components/ItemCart/ItemCart';
import { Link } from 'react-router-dom';
import formatCurrency from 'format-currency';

const CartExists = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTotalPrice(JSON.parse(localStorage.getItem('cart')).totalPrice);
    setTotalQuantity(JSON.parse(localStorage.getItem('cart')).totalQuantity);

    setItems(Object.values(JSON.parse(localStorage.getItem('cart')).products));

  }, []);

  let removeCart = (childData, id) => {
    props.callBackRemoveCart(childData);

    setTotalPrice(JSON.parse(localStorage.getItem('cart')).totalPrice);
    setTotalQuantity(JSON.parse(localStorage.getItem('cart')).totalQuantity);

    let newItem = items.filter(v => v.productInfo._id !== id);
    setItems([...newItem]);

    if (JSON.parse(localStorage.getItem('cart')).totalQuantity === 0) {
      localStorage.removeItem('cart');
    }
  }

  return (
    <>
      <div className="col-md-8 cart">
        <div className="cart-content py-3 pl-3">
          <h4 className="header-gio-hang">GIỎ HÀNG CỦA BẠN <span>( { totalQuantity } sản phẩm)</span></h4>

          <div className="cart-list-items">
            {
              items ? items.map((v, i) => {
                return (
                  <ItemCart
                    key={i}
                    info={v}
                    callBackRemoveCart={removeCart}
                  />  
                ) 
              }) : ''
            }
          </div>
          <div className="row">
            <div className="col-md-3">
              <Link to="/" className="btn nutmuathem mb-3">Mua thêm</Link>
            </div>
            <div className="col-md-2">
              <Link to="/" className="btn nutmuathem mb-3">Cập nhật</Link>
            </div>
            <div className="col-md-4 offset-md-3">
              <div className="tonggiatien">
                <div className="group d-flex justify-content-between">
                  <p className="label">Tạm tính:</p>
                  <p className="tamtinh">{ formatCurrency(totalPrice) } ₫</p>
                </div>
                <div className="group d-flex justify-content-between">
                  <p className="label">Giảm giá:</p>
                  <p className="giamgia">0 ₫</p>
                </div>
                <div className="group d-flex justify-content-between">
                  <p className="label">Phí vận chuyển:</p>
                  <p className="phivanchuyen">0 ₫</p>
                </div>
                <div className="group d-flex justify-content-between">
                  <p className="label">Phí dịch vụ:</p>
                  <p className="phidicvu">0 ₫</p>
                </div>
                <div className="group d-flex justify-content-between align-items-center">
                  <strong className="text-uppercase">Tổng cộng:</strong>
                  <p className="tongcong">{ formatCurrency(totalPrice) } ₫</p>
                </div>
                <small className="note d-flex justify-content-end text-muted"> (Giá đã bao gồm VAT) </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mt-3">
        <button className="btn btn-block" style={{ background: '#F5A623', color: 'white' }}>Tiến hành đặt hàng</button>
      </div>
    </>
  )
}

export default CartExists
