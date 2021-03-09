import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { successToast, errorToast } from './../components/Toasts/Toasts';
import authAPI from './../apis/authAPI';
import setCookie from './../utils/setCookie';

const Start = () => {


  let formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Chú ý định dạng email")
        .required("Bắt buộc nhập email"),
      password: Yup.string()
        .min(6, "Mật khẩu ít nhất là 6 kí tự")
        .required("Bắt buộc nhập mật khẩu")
    }),
    onSubmit: (values) => {
      authAPI.login(values).then((res) => {
        if (res.data.message === 'SUCCESS') {
          successToast("Đăng nhập thành công !");
          document.cookie = 'auth=;expires = Thu, 01 Jan 1970 00:00:00 GMT';
          document.cookie = 'currentUserId=;expires = Thu, 01 Jan 1970 00:00:00 GMT';
          // setTimeout(() => {
          //   setCookie("auth", res.data.token, 2, "/");
          //   setCookie("currentUserId", res.data.userId, 2, "/");
          //   // document.cookie= `auth=${res.data.token};path=/`;
          //   // document.cookie= `currentUserId=${res.data.userId};path=/`;
          //   history.push({ pathname: '/dashboard' });
          // }, 500);
      
          setCookie("auth", res.data.token, 2, "/");
          setCookie("currentUserId", res.data.userId, 2, "/");

          setTimeout(() => {
            // history.replace({ pathname: '/dashboard' });
            window.location.href = '/dashboard';
          }, 1000);
          
        } else {
          errorToast("Đăng nhập thất bại !");
        }
      })
    }
  })

  return (
    <div className="login-page">
      <div className="login-box">
      {/* /.login-logo */}
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <a href="/" className="h1"><b>Ecomm</b>erce</a>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Đăng nhập để bắt đầu phiên làm việc</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="input-group mb-3">
              <input type="email" className="form-control" name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div>
              { formik.errors.email && formik.touched.email && (
                <small>{ formik.errors.email }</small>
              )}
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" name="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="">
              { formik.errors.password && formik.touched.password && (
                <small>{ formik.errors.password }</small>
              )}
            </div>

            <div className="row">
              <div className="col-7">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">
                    Remember Me
                    </label>
                </div>
              </div>
              {/* /.col */}
              <div className="col-5">
                <button type="submit" className="btn btn-primary btn-block">Đăng nhập</button>
              </div>
              {/* /.col */}
            </div>
          </form>
          <div className="social-auth-links text-center mt-2 mb-3">
            <a href="/" className="btn btn-block btn-primary">
              <i className="fab fa-facebook mr-2" /> Sign in using Facebook
              </a>
            <a href="/" className="btn btn-block btn-danger">
              <i className="fab fa-google-plus mr-2" /> Sign in using Google+
              </a>
          </div>
          {/* /.social-auth-links */}
          {/* <p className="mb-1">
            <a href="forgot-password.html">I forgot my password</a>
          </p>
          <p className="mb-0">
            <a href="register.html" className="text-center">Register a new membership</a>
          </p> */}
        </div>
        {/* /.card-body */}
      </div>
      {/* /.card */}
    </div>
    </div>
  )
}

export default Start;
