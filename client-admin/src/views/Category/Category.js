import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import categoryAPI from './../../apis/categoryAPI';
import { successToast, errorToast } from './../../components/Toasts/Toasts';

const Category = () => {

  const [dataCate, setDataCate] = useState([]);

  useEffect(() => {
    categoryAPI.getAllCategories().then((res) => {
      setDataCate(res.data.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  let handleDeleteCate = (id) => {
    categoryAPI.deleteById(id).then((res) => {
      if (res.data.message === 'CATEGORY_NOT_FOUND') {
        errorToast('Danh mục không tồn tại !');
      }
      if (res.data.message === 'SUCCESS') {
        successToast('Xóa danh mục thành công !');
        let newDataCate = dataCate.filter(value => value._id !== id);
        setDataCate([...newDataCate]);
      }
    }).catch((err) => {
      errorToast('Có lỗi xảy ra, vui lòng thử lại');
    })
  }

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Danh mục sản phẩm</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/dashboard">
                    Trang chủ
                  </Link>
                </li>
                <li className="breadcrumb-item active">Danh mục</li>
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
                    <Link to="/categories/add">
                      <button className="btn btn-primary">
                      <i className="fas fa-plus-circle"></i> Thêm danh mục
                      </button>
                    </Link>
                  </h3>
                </div>

                <div className="card-body">
                  <table id="example1" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Số thứ tự</th>
                        <th>Tên danh mục</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>

                    <tbody>

                      {
                        dataCate.map((v, i) => {
                          return (
                            <tr key={i}>
                              <td>{i}</td>
                              <td>{v.c_name}</td>
                              <td>
                                <span className="badge badge-primary">Còn bán</span>
                              </td>
                              <td>
                                <button className="btn btn-danger" onClick={() => handleDeleteCate(v._id)}>
                                  <i className="fas fa-trash-alt"></i>  
                                </button>
                                <Link to={`categories/edit/${v._id}`}>
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
                        <th>Tên danh mục</th>
                        <th>Trạng thái</th>
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

export default Category;
