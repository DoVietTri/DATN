import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../assets/img/AdminLTELogo.png';
import avatar from './../assets/img/user2-160x160.jpg';
import userAPI from './../apis/userAPI';
import getCookie from '../utils/getCookie';
import { errorToast } from './Toasts/Toasts';

const Sidebar = () => {
  const [currUser, setCurrUser] = useState({});

  useEffect(() => {
    userAPI.getUserById(getCookie('currentUserId')).then((res) => {
      setCurrUser(res.data.data);
    }).catch((err) => {
      errorToast("Có lỗi xảy ra, vui lòng thử lại");
    })
  }, []);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo  */}
      <a href="index3.html" className="brand-link">
        <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>

      {/* Sidebar */}
      <div className="sidebar">

        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src={avatar} className="img-circle elevation-2" alt="User" />
          </div>
          <div className="info">
            <Link to="/profile">
              {currUser.username}
            </Link>
          </div>
        </div>

        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            <li className="nav-header">Danh mục chính</li>

            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link" activeClassName="active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p> Bảng điều khiển </p>
              </NavLink>
            </li>

            <li className="nav-item">
              <a href="#!" className="nav-link">
                <i className="nav-icon fab fa-product-hunt"></i>
                <p>
                  Quản lý sản phẩm
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="/categories" className="nav-link" activeClassName="active">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Danh mục</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/products" className="nav-link" activeClassName="active">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Sản phẩm</p>
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/authors" className="nav-link" activeClassName="active">
                <i className="nav-icon fas fa-users"></i>
                <p>Tác giả</p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/companies" className="nav-link" activeClassName="active">
                <i className="nav-icon fas fa-warehouse"></i>
                <p> Nhà xuất bản </p>
              </NavLink>
            </li>

            <li className="nav-item">
              <a href="#!" className="nav-link">
                <i className="nav-icon fas fa-hands-helping"></i>
                <p>
                  Đối tác
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="/customers" className="nav-link" activeClassName="active">
                    <i className="nav-icon far fa-circle nav-icon"></i>
                    <p>Khách hàng</p>
                  </NavLink>
                </li>

              </ul>
            </li>

            <li className="nav-header">Hệ thống</li>

            <li className="nav-item">
              <NavLink to="/staffs" className="nav-link" activeClassName="active">
                <i className="nav-icon fas fa-users"></i>
                <p> Quản lý nhân viên </p>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/profile" className="nav-link" activeClassName="active">
                <i className="nav-icon fas fa-user"></i>
                <p> Hồ sơ cá nhân </p>
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}

export default Sidebar;