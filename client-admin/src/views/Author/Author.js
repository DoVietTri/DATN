import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import authorAPI from './../../apis/authorAPI';
import { errorToast } from './../../components/Toasts/Toasts';

const Author = () => {
  const [dataAuthor, setDataAuthor] = useState([]);

  useEffect(() => {
    authorAPI.getAllAuthors().then((res) => {
      setDataAuthor(res.data.data);
    }).catch((err) => {
      errorToast("Có lỗi xảy ra, vui lòng thử lại !");
    })
  }, []);
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Quản lý tác giả</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/dashboard">
                    Trang chủ
                  </Link>
                </li>
                <li className="breadcrumb-item active">Tác giả</li>
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
                    <Link to="/authors/add">
                      <button className="btn btn-primary">
                        <i className="fas fa-plus-circle"></i> Thêm tác giả
                      </button>
                    </Link>
                  </h3>
                </div>

                <div className="card-body">
                  <table id="example1" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Số thứ tự</th>
                        <th>Hình ảnh</th>
                        <th>Tên tác giả</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>

                      {
                        dataAuthor.map((value, index) => {
                          return (
                            <tr key={index}>
                              <td>{index}</td>
                              <td>
                                <img src={value.a_image[0].url} alt="Author" />
                              </td>
                              <td>{value.a_name}</td>
                              <td>
                                <button className="btn btn-danger">
                                  <i className="fas fa-trash-alt"></i>
                                </button>
                                <Link to="/">
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
                        <th>Hình ảnh</th>
                        <th>Tên tác giả</th>
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

export default Author;
