import React from 'react';
import './Account.css';

const Account = () => {
  return (
    <section className="account-page my-3">
      <div className="container">
        <div className="page-content bg-white">
          <div className="account-page-tab-content m-4">
            {/* 2 tab: thông tin tài khoản, danh sách đơn hàng  */}
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-taikhoan-tab" data-toggle="tab" href="#nav-taikhoan" role="tab" aria-controls="nav-home" aria-selected="true">Thông tin tài khoản</a>
                <a className="nav-item nav-link" id="nav-donhang-tab" data-toggle="tab" href="#nav-donhang" role="tab" aria-controls="nav-profile" aria-selected="false">Danh sách đơn hàng</a>
              </div>
            </nav>
            {/* nội dung 2 tab */}
            <div className="tab-content">
              {/* nội dung tab 1: thông tin tài khoản  */}
              <div className="tab-pane fade show active pl-4 " id="nav-taikhoan" role="tabpanel" aria-labelledby="nav-taikhoan-tab">
                <div className="offset-md-4 mt-3">
                  <h3 className="account-header">Thông tin tài khoản</h3>
                </div>
                <div className="hoten my-3">
                  <div className="row">
                    <label className="col-md-2 offset-md-2" htmlFor="account-hoten">Họ tên</label>
                    <input className="col-md-4" type="text" name="account-hoten" />
                  </div>
                </div>
                <div className="email my-3">
                  <div className="row">
                    <label className="col-md-2 offset-md-2" htmlFor="account-email">Địa chỉ email</label>
                    <input className="col-md-4" type="text" name="account-email" disabled="disabled" defaultValue="abc@gmail.com" />
                  </div>
                </div>
                <div className="checkbox-change-pass my-3">
                  <div className="row">
                    <input type="checkbox" name="changepass" id="changepass" className="offset-md-4" style={{ marginTop: '6px', marginRight: '5px' }} />
                    <label htmlFor="changepass">Thay đổi mật khẩu</label>
                  </div>
                </div>
                <div className="thay-doi-mk">
                  <div className="mkcu my-3">
                    <div className="row">
                      <label className="col-md-2 offset-md-2" htmlFor="account-mkcu">Mật khẩu cũ</label>
                      <input className="col-md-4" type="text" name="account-mkcu" />
                    </div>
                  </div>
                  <div className="mkmoi my-3">
                    <div className="row">
                      <label className="col-md-2 offset-md-2" htmlFor="account-mkmoi">Mật khẩu mới</label>
                      <input className="col-md-4" type="text" name="account-mkmoi" />
                    </div>
                  </div>
                  <div className="xacnhan-mkmoi my-3">
                    <div className="row">
                      <label className="col-md-2 offset-md-2" htmlFor="account-xacnhan-mkmoi">Xác nhận mật khẩu</label>
                      <input className="col-md-4" type="text" name="account-xacnhan-mkmoi" />
                    </div>
                  </div>
                  <div className="capnhat my-3">
                    <div className="row">
                      <button type="button" className="button-capnhat text-uppercase offset-md-4 btn btn-warning mb-4">Cập nhật</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* nội dung tab 2: danh sách đơn hàng */}
              <div className="tab-pane fade py-3" id="nav-donhang" role="tabpanel" aria-labelledby="nav-donhang-tab">
                <div className="donhang-table">
                  <table className="m-auto">
                    <tbody><tr>
                      <th>Mã đơn hàng</th>
                      <th>Ngày mua</th>
                      <th>Sản phẩm</th>
                      <th>Tổng tiền</th>
                      <th>Trạng thái đơn hàng</th>
                    </tr>
                    </tbody></table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Account;
