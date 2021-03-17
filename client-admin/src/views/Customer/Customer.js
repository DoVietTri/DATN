import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import customerAPI from '../../apis/customerAPI';
import { errorToast } from '../../components/Toasts/Toasts';

const Customer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    customerAPI.getAllCustomers().then((res) => {
      setCustomers(res.data.data);
      console.log(res.data.data);
    }).catch((err) => {
      errorToast("Có lỗi xảy ra, vui lòng thử lại !");
    })
  }, []);

  let handleDeleteCustomer = (id) => {

  }

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Quản lý khách hàng</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/dashboard">
                    Trang chủ
                        </Link>
                </li>
                <li className="breadcrumb-item active">Khách hàng</li>
              </ol>
            </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-primary">

                <div className="card-header">
                  <h3 className="card-title">
                    Tất cả khách hàng
                  </h3>
                </div>

                <div className="card-body">
                  <table id="example1" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Thông tin</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map((v, i) => {
                        return (
                          <tr key={i}>
                            <td>{i}</td>
                            <td>{v.username}</td>
                            <td>
                              <ul>
                                <li>Email: {v.email}</li>
                                <li>Ngày sinh: {v.dateOfBirth} </li>
                                <li>Giới tính: {v.gender === 'male' ? 'Nam' : 'Nữ' }</li>
                              </ul>
                            </td>

                            <td>
                              <button className="btn btn-danger" onClick={() => handleDeleteCustomer(v._id)}>
                                <i className="fas fa-trash-alt"></i>
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Thông tin</th>
                        <th>Hành động</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Customer;
