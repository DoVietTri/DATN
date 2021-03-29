import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productAPI from './../../apis/productAPI';
import { errorToast, successToast } from './../../components/Toasts/Toasts';
import useFullPageLoader from './../../hooks/useFullPageLoader';

const Product = () => {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    showLoader();
    productAPI.getAllProduct().then((res) => {
      if (res.data.message === 'SUCCESS') {
        setAllProducts(res.data.data);
        hideLoader();
      }
    }).catch((err) => {
      errorToast("Có lỗi xảy ra, vui lòng thử lại !");
    })
  }, []);

  let handleDeleteProduct = (id) => {
    showLoader();
    productAPI.deleteProductById(id).then((res) => {
      if (res.data.message === 'PRODUCT_NOT_FOUND') {
        hideLoader();
        errorToast("Sản phẩm không tồn tại");
      }
      if (res.data.message === 'DESTROY_IMAGE_FAILED') {
        hideLoader();
        errorToast("Xóa hình ảnh không thành công, vui lòng thử lại");
      }
      if (res.data.message === 'SUCCESS') {
        hideLoader();
        successToast("Xóa sản phẩm thành công");
        let newAllProducts = allProducts.filter(product => product._id !== id);
        setAllProducts([...newAllProducts]);
      }
    })
  }

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Sản phẩm</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/dashboard">
                    Trang chủ
                        </Link>
                </li>
                <li className="breadcrumb-item active">Sản phẩm</li>
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
                    <Link to="/products/add">
                      <button className="btn btn-primary">
                        <i className="fas fa-plus-circle"></i> Thêm sản phẩm
                      </button>
                    </Link>
                  </h3>
                </div>

                <div className="card-body">
                  <table id="example1" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Số thứ tự</th>
                        <th>Tên sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Mã sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Danh mục</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>

                    <tbody>

                      {
                        allProducts.map((v, i) => {
                          return (
                            <tr key={i}>
                              <td>{i}</td>
                              <td>{v.p_name}</td>
                              <td>
                                <img src={v.p_image_detail.url} alt="Product" className="img-thumbnail" style={{ height: '100px' }} />
                              </td>
                              <td>{v.p_code}</td>
                              <td>{v.p_price} VND</td>
                              <td>{v.p_quantity}</td>
                              <td>
                                <span className="badge badge-info">{v.category.c_name}</span>
                              </td>
                              <td>
                                <button className="btn btn-danger" onClick={() => handleDeleteProduct(v._id)}>
                                  <i className="fas fa-trash-alt"></i>
                                </button>
                                <Link to={`/products/edit/${v._id}`} >
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
                        <th>Tên sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Mã sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Danh mục</th>
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
      { loader }
    </div>
  )
}

export default Product;
