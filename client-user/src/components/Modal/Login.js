import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import userAPI from '../../apis/userAPI';
import { errorToast, successToast } from '../Toasts/Toasts';
import setCookie from './../../utils/setCookie';

const Login = () => {

  let loginFormik = useFormik({
    initialValues: {
      inputEmail: '',
      inputPassword: ''
    },
    validationSchema: Yup.object({
      inputEmail: Yup.string()
        .required("Bắt buộc nhập email !")
        .email("Định dạng email !"),
      inputPassword: Yup.string()
        .required("Bắt buộc nhập mật khẩu !")
        .min(6, "Mật khẩu ngắn nhất là 6 kí tự !")
        .max(30, "Mật khẩu dài nhất là 30 kí tự !")
    }),
    onSubmit: (values) => {
      let data = {
        email: values.inputEmail,
        password: values.inputPassword
      };
      userAPI.login(data).then((res) => {
        if (res.data.message === 'EMAIL_NOT_EXISTS') {
          errorToast("Email không tồn tại !");
        };
        if (res.data.message === 'NON_ACTIVE') {
          errorToast("Tài khoản chưa được active, vui lòng vào email để active tài khoản");
        }
        if (res.data.message === 'PASSWORD_IS_WRONG') {
          errorToast("Sai mật khẩu !");
        };
        if (res.data.message === 'SUCCESS') {
          successToast("Đăng nhập thành công !");
          document.cookie = 'auth=;expires = Thu, 01 Jan 1970 00:00:00 GMT';
          document.cookie = 'currentUserId=;expires = Thu, 01 Jan 1970 00:00:00 GMT';

          setCookie("authUser", res.data.token, 2, "/");
          setCookie("userId", res.data.userId, 2, "/");

          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      }).catch((err) => {
        errorToast("Có lỗi xảy ra, vui lòng thử lại !");
      })
    }
  });

  return (
    <div className="modal fade mt-5" id="formdangnhap" data-backdrop="static" tabIndex={-1} aria-labelledby="dangnhap_tieude" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <ul className="tabs d-flex justify-content-around list-unstyled mb-0">
              <li className="tab tab-dangnhap text-center">
                <a className=" text-decoration-none" href="# ">Đăng nhập</a>
                <hr />
              </li>
              <li className="tab tab-dangky text-center">
                <a className="text-decoration-none" href="# ">Đăng ký</a>
                <hr />
              </li>
            </ul>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form id="form-signin" className="form-signin mt-2" onSubmit={loginFormik.handleSubmit}>

              <div className="mb-3">
                <div className="form-group">
                  <label htmlFor="inputEmail">Email (*) </label>
                  <input type="email" className="form-control" placeholder="Nhập email..." name="inputEmail"
                    value={loginFormik.values.inputEmail}
                    onChange={loginFormik.handleChange}
                  />
                  {loginFormik.errors.inputEmail && loginFormik.touched.inputEmail && (
                    <small style={{ color: 'red' }} >{loginFormik.errors.inputEmail}</small>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <div className="form-group">
                  <label htmlFor="inputPassword">Mật khẩu (*) </label>
                  <input type="password" className="form-control" placeholder="Nhập mật khẩu..." name="inputPassword"
                    value={loginFormik.values.inputPassword}
                    onChange={loginFormik.handleChange}
                  />
                  {loginFormik.errors.inputPassword && loginFormik.touched.inputPassword && (
                    <small style={{ color: 'red' }} >{loginFormik.errors.inputPassword}</small>
                  )}
                </div>
              </div>

              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Nhớ mật khẩu</label>
                <a href="/" className="float-right text-decoration-none" style={{ color: '#F5A623' }}>Quên mật khẩu</a>
              </div>
              <button className="btn btn-lg btn-block btn-signin text-uppercase text-white" type="submit" style={{ background: '#F5A623' }}>Đăng nhập</button>
              <hr className="my-4" />
              <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2" /> Đăng nhập bằng Google</button>
              <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2" /> Đăng nhập bằng Facebook</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
