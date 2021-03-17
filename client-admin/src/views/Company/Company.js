import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import companyAPI from '../../apis/companyAPI';
import { errorToast, successToast } from '../../components/Toasts/Toasts';

const Company = () => {
  const [dataCompany, setDataCompany] = useState([]);

  useEffect(() => {
    companyAPI.getAllCompanies().then((res) => {
      setDataCompany(res.data.data);
    }).catch((err) => {
      errorToast("Có lỗi xảy ra, vui lòng thử lại !");
    })
  }, []);

  let handleDelete = (id) => {
    companyAPI.deleteCompanyById(id).then((res) => {
      if (res.data.message === 'COMPANY_NOT_FOUND') {
        errorToast("Công ty không tồn tại");
      }
      if (res.data.message === 'SUCCESS') {
        successToast("Xóa nhà  xuất bản thành công");
        let newDataCom = dataCompany.filter(value => value._id !== id);
        setDataCompany([...newDataCom]);
      }
    }).catch((err) => {
      errorToast("Có lỗi xảy ra, vui lòng thử lại sau !");
    })
  }

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Nhà xuất bản</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/dashboard">
                    Trang chủ
                  </Link>
                </li>
                <li className="breadcrumb-item active">Nhà xuất bản</li>
              </ol>
            </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">

                <div className="card-header">
                  <h3 className="card-title">
                    <Link to="/companies/add">
                      <button className="btn btn-primary">
                        <i className="fas fa-plus-circle"></i> Thêm nhà xuất bản
                      </button>
                    </Link>
                  </h3>
                </div>

                <div className="card-body">
                  <table id="example1" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Số thứ tự</th>
                        <th>Tên nhà xuất bản</th>
                        <th>Mã nhà xuất bản</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        dataCompany.map((value, index) => {
                          return (
                            <tr key={index}>
                              <td>{index}</td>
                              <td>{value.c_name}</td>
                              <td>{value.c_code}</td>
                              <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(value._id)}>
                                  <i className="fas fa-trash-alt"></i>
                                </button>
                                <Link to={`/companies/edit/${value._id}`}>
                                  <button className="btn btn-warning">
                                    <i className="fas fa-edit"></i>
                                  </button>
                                </Link>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Số thứ tự</th>
                        <th>Tên nhà xuất bản</th>
                        <th>Mã nhà xuất bản</th>
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

export default Company;
