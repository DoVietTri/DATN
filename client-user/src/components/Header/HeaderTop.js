import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userAPI from '../../apis/userAPI';
import { successToast } from '../Toasts/Toasts';
import getCookie from './../../utils/getCookie';
import './HeaderTop.css';

const token = getCookie('authUser');

const HeaderTop = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    let id = getCookie('userId');
    if (id) {
      userAPI.getUserById(id).then((res) => {
        setUser(res.data.data);
      });
    }
  }, []);

  let handleLogout = () => {
    document.cookie = 'authUser=;expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    document.cookie = 'userId=;expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    successToast("Đăng xuất thành công !");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }


  return (
    <nav className="navbar navbar-expand-md bg-white navbar-light">
      <div className="container">
        {/* logo  */}
        <Link className="navbar-brand" to="/" style={{ color: '#CF111A' }}><b>TextBook</b>.xyz</Link>
        {/* navbar-toggler  */}
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          {/* form tìm kiếm  */}
          <form className="form-inline ml-auto my-2 my-lg-0 mr-3">
            <div className="input-group" style={{ width: '520px' }}>
              <input type="text" className="form-control" aria-label="Small" placeholder="Nhập sách cần tìm kiếm..." />
              <div className="input-group-append">
                <button type="button" className="btn" style={{ backgroundColor: '#CF111A', color: 'white' }}>
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </form>
          {/* ô đăng nhập đăng ký giỏ hàng trên header  */}
          <ul className="navbar-nav mb-1 ml-auto">

            {
              token !== '' ? (
                <div className="dropdown">
                  <li className="nav-item account d-flex user-curr" type="button" data-toggle="dropdown">
                    <a href="# " className="btn btn-secondary rounded-circle">
                      <i className="fa fa-user" />
                    </a>
                    <div className="info-logout">
                      <a href="# " className="nav-link text-dark text-uppercase username">{user.username}</a>
                      <a className="nav-link text-dark logout" href="# ">Tài khoản <i className="fas fa-caret-down"></i></a>
                    </div>
                  </li>
                  <div className="dropdown-menu">
                      <span className="item-info"><i className="fa fa-user" /><Link to="/account" > Quản lý tài khoản </Link></span>
                      <span className="item-info"><i className="fas fa-cart-plus" /><Link to="/orders/history">Quản lý đơn hàng</Link> </span>
                      <span className="item-info" onClick={handleLogout}><i className="fas fa-sign-out-alt" /> <a href="# " > Đăng xuất </a> </span>
                    </div>
                </div>
              ) : (
                <div className="dropdown">
                  <li className="nav-item account user-not-login" type="button" data-toggle="dropdown" id="dropdownMenuButton">
                    <a href="# " className="btn btn-secondary rounded-circle">
                      <i className="fa fa-user" />
                    </a>
                    <a className="nav-link text-dark text-uppercase" href="# " style={{ display: 'inline-block' }}>Tài khoản</a>
                  </li>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item nutdangky text-center mb-2" href="# " data-toggle="modal" data-target="#formdangky">Đăng ký</a>
                    <a className="dropdown-item nutdangnhap text-center" href="# " data-toggle="modal" data-target="#formdangnhap">Đăng nhập</a>
                  </div>
                </div>
              )
            }
            <li className="nav-item giohang">
              <Link to="/cart" className="btn btn-secondary rounded-circle">
                <i className="fa fa-shopping-cart" />
                <div className="cart-amount"> {props.totalItem} </div>
              </Link>
              <Link to="/cart" className="nav-link text-dark giohang text-uppercase" style={{ display: 'inline-block' }}>Giỏ Hàng</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderTop;
