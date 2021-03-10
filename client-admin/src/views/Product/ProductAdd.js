import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import * as Yup from 'yup';
// import { useFormik } from 'formik';
import categoryAPI from './../../apis/categoryAPI';

const ProductAdd = () => {
  const [cate, setCate] = useState([]);

  useEffect(() => {
    categoryAPI.getAllCategories().then((res) => {
      setCate(res.data.data);
      console.log(res.data.data);
    }).catch((err) => {

    })
  }, []);

  // let addProductFormik = useFormik({
  //   initialValues: {
      
  //   }
  // });

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Thêm sản phẩm</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/dashboard">
                    Trang chủ
                                </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/products">
                    Sản phẩm
                            </Link>
                </li>
                <li className="breadcrumb-item active">Thêm sản phẩm</li>
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
                  <h3 className="card-title">Thêm</h3>
                </div>
                {/* /.card-header */}

                <form>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6 col-sm-6">
                        <div className="form-group">
                          <label htmlFor="inputCateName">Danh mục (*)</label>
                          <select className="form-control select2">
                            {/* <option selected="selected">{ cate[0].c_name }</option> */}
                            {cate.map((value, index) => {
                              return (
                                <option key={index}>{value.c_name}</option>
                              )
                            })}
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputProductName">Tên sản phẩm (*)</label>
                          <input type="text" className="form-control" name="inputProductName" placeholder="Nhập tên sản phẩm...." />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputProductCode">Mã sản phẩm (*)</label>
                          <input type="text" className="form-control" name="inputProductCode" placeholder="Nhập mã sản phẩm...." />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputProductName">Giá sản phẩm (*)</label>
                          <input type="number" className="form-control" name="inputProductName" placeholder="Nhập tên sản phẩm...." />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputProductQuantity">Số lượng sản phẩm (*)</label>
                          <input type="number" className="form-control" name="inputProductQuantity" placeholder="Số lượng sản phẩm...." />
                        </div>
                      </div>

                      <div className="col-6 col-sm-6">
                        <div className="form-group">
                          <label htmlFor="inputFile">Hình ảnh (*)</label>
                          <div className="input-group">
                            <div className="custom-file">
                              <input type="file" className="custom-file-input" name="inputFile" multiple />
                              <label className="custom-file-label" htmlFor="inputFile">Chọn file</label>
                            </div>
                            <div className="input-group-append">
                              <span className="input-group-text">Upload</span>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="inputProductDescription">Mô tả sản phẩm</label>
                          <textarea className="form-control" name="inputProductDescription" rows={6} placeholder="Nhập mô tả sản phẩm..." />
                        </div>

                        <div className="form-group">
                          <label htmlFor="inputProductAuthor">Tên tác giả (*)</label>
                          <input type="text" className="form-control" name="inputProductAuthor" placeholder="Nhập tên tác giả..." />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Thêm</button>
                    <button type="reset" className="btn btn-warning">Làm mới</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductAdd;
