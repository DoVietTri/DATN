import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productAPI from './../../apis/productAPI';
import { errorToast } from './../../components/Toasts/Toasts';

const Product = () => {

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    productAPI.getAllProduct().then((res) => {
     if (res.data.message === 'SUCCESS') {
      setAllProducts(res.data.data);
      console.log(res.data.data);
     }
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
                             <td>{ i }</td>
                             <td>{ v.p_name }</td>
                             <td>
                               <img src={v.p_image_detail[0].url} alt="Product" />
                             </td>
                             <td>{ v.p_code }</td>
                             <td>{ v.p_price } VND</td>
                             <td>{ v.p_quantity }</td>
                             <td> { v.category.c_name }</td>
                             <td>
                                <button className="btn btn-danger">
                                  <i className="fas fa-trash-alt"></i>  
                                </button>
                                <Link to="" >
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

    </div>
  )
}

export default Product;
