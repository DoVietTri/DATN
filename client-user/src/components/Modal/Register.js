import React from 'react';
import './Register.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {

  const registerFormik = useFormik({
    initialValues: {

    },
    validationSchema: Yup.object({

    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div className="modal fade mt-5" id="formdangky" data-backdrop="static" tabIndex={-1} aria-labelledby="dangky_tieude" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <ul className="tabs d-flex justify-content-around list-unstyled mb-0">
              <li className="tab tab-dangnhap text-center">
                <a className="text-decoration-none" href="# ">Đăng nhập</a>
                <hr />
              </li>
              <li className="tab tab-dangky text-center">
                <a className="text-decoration-none" href="# " >Đăng ký</a>
                <hr />
              </li>
            </ul>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form id="form-signup" className="form-signin mt-2">

              <div className="mb-3">
                <div className="form-group">
                  <label htmlFor="inputUsername">Họ tên (*)</label>
                  <input type="text" className="form-control" placeholder="Nhập họ và tên..." name="username" />
                </div>
              </div>

              <div className="mb-3">
                <div className="form-group">
                  <label htmlFor="inputEmail">Email (*)</label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Nhập địa chỉ email..." name="email" />
                    <div className="input-group-append">
                      <button className="btn send-email" type="button">Gửi mã xác thực</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="form-group">
                  <label htmlFor="inputToken">Mã xác thực (*) </label>
                  <input type="text" className="form-control" placeholder="Nhập mã xác thực..." name="inputToken" />
                </div>
              </div>

              <div className="mb-3">
                <div className="form-group">
                  <label htmlFor="inputPassword">Mật khẩu (*) </label>
                  <input type="text" className="form-control" placeholder="Nhập mật khẩu..." name="inputPassword" />
                </div>
              </div>

              <div className="mb-3">
                <div className="form-group">
                  <label htmlFor="inputRePassword">Nhập lại mật khẩu (*) </label>
                  <input type="text" className="form-control" placeholder="Nhập lại mật khẩu..." name="inputRePassword" />
                </div>
              </div>

              <button className="btn btn-lg btn-block btn-signin text-uppercase text-white mt-3" type="submit" style={{ background: '#F5A623' }}>Đăng ký</button>
              <hr className="mt-3 mb-2" />
              <div className="custom-control custom-checkbox">
                <p className="text-center">Bằng việc đăng ký, bạn đã đồng ý với DealBook về</p>
                <a href="/" className="text-decoration-none text-center" style={{ color: '#F5A623' }}>Điều khoản dịch
                    vụ &amp; Chính sách bảo mật</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
