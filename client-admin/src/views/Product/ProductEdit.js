import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { errorToast } from '../../components/Toasts/Toasts';
import productAPI from './../../apis/productAPI';
import categoryAPI from './../../apis/categoryAPI';
import authorAPI from './../../apis/authorAPI';
import companyAPI from './../../apis/companyAPI';
const ProductEdit = (props) => {

  const [productItem, setProductItem] = useState({});
  const [cate, setCate] = useState([]);
  const [author, setAuthor] = useState([]);
  const [company, setCompany] = useState([]);

  useEffect(() => {
    let id = props.match.params.id;
    productAPI.getProductById(id).then((res) => {
      setProductItem(res.data.data);
    }).catch((err) => {
      errorToast("Có lỗi xảy ra, vui lòng thử lại !");
    });

    categoryAPI.getAllCategories().then((res) => {
      setCate(res.data.data);
    }).catch((err) => {
      console.log(err);
    });

    authorAPI.getAllAuthors().then((res) => {
      setAuthor(res.data.data);
    }).catch((err) => {
      console.log(err);
    });

    companyAPI.getAllCompanies().then((res) => {
      setCompany(res.data.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [props.match.params.id]);

  let updateProductFormik = useFormik({
    initialValues: {
      inputCateName: productItem.category ? productItem.category._id : '',
      inputProductName: productItem.p_name,
      inputProductCode: productItem.p_code,
      inputProductPrice: productItem.p_price,
      inputProductQuantity: productItem.p_quantity,
      inputProductDatePublic: productItem.p_datepublic,
      inputProductImage: '',
      inputAuthorName: [],
      inputCompanyName: productItem.company ? productItem.company.c_name : '',
      inputProductDescription: productItem.p_description
    },
    enableReinitialize: true,
    validationSchema: Yup.object({

    }),
    onSubmit: (values) => {
      console.log(values);
    }
  })

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Cập nhật sản phẩm</h1>
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
                <li className="breadcrumb-item active">Cập nhật sản phẩm</li>
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
                  <h3 className="card-title">Cập nhật</h3>
                </div>

                <form onSubmit={updateProductFormik.handleSubmit}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6 col-sm-6">

                        <div className="form-group">
                          <label htmlFor="inputCateName">Danh mục (*)</label>
                          <select className="form-control"
                            // value={updateProductFormik.values.inputCateName || ''}
                            onChange={updateProductFormik.handleChange}
                          >
                            {
                              cate.map((v, i) => {
                                return (
                                  <option key={i} value={v._id}
                                    selected={v._id === updateProductFormik.values.inputCateName ? true : false}  > { v.c_name} </option>
                                )
                              })
                            }
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="inputProductName">Tên sản phẩm (*)</label>
                          <input type="text" className="form-control" name="inputProductName" placeholder="Nhập tên sản phẩm...."
                            value={updateProductFormik.values.inputProductName || ''}
                            onChange={updateProductFormik.handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="inputProductCode">Mã sản phẩm (*)</label>
                          <input type="text" className="form-control" name="inputProductCode" placeholder="Nhập mã sản phẩm...."
                            value={updateProductFormik.values.inputProductCode || ''}
                            onChange={updateProductFormik.handleChange}
                          />


                        </div>

                        <div className="form-group">
                          <label htmlFor="inputProductPrice">Giá sản phẩm (*)</label>
                          <input type="number" className="form-control" name="inputProductPrice" placeholder="Nhập tên sản phẩm...."
                            value={updateProductFormik.values.inputProductPrice || ''}
                            onChange={updateProductFormik.handleChange}
                          />

                        </div>

                        <div className="form-group">
                          <label htmlFor="inputProductQuantity">Số lượng sản phẩm (*)</label>
                          <input type="number" className="form-control" name="inputProductQuantity" placeholder="Số lượng sản phẩm...."
                            value={updateProductFormik.values.inputProductQuantity || ''}
                            onChange={updateProductFormik.handleChange}
                          />

                        </div>

                        <div className="form-group">
                          <label htmlFor="inputProductDatePublic" className="col-form-label">Ngày phát hành (*)</label>
                          <input type="date" className="form-control" name="inputProductDatePublic" placeholder="Ngày phát hành..."
                            value={updateProductFormik.values.inputProductDatePublic || ''}
                            onChange={updateProductFormik.handleChange}
                          />

                        </div>

                      </div>

                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="inputFile">Hình ảnh </label>
                          <div className="input-group">
                            <div className="custom-file">
                              <input type="file" className="custom-file-input" name="inputProductImage" multiple

                              />
                              <label className="custom-file-label" htmlFor="inputFile">Chọn file</label>
                            </div>
                            <div className="input-group-append">
                              <span className="input-group-text">Upload</span>
                            </div>
                          </div>
                        </div>

                        <div className="col-6">
                          <label htmlFor="currImage">Hình ảnh hiện tại</label>
                          <div className="row">
                            <div className="col-4">
                              <img src={productItem.p_image_detail ? productItem.p_image_detail.url : ""} className="img-thumbnail" alt="Author" style={{ height: '100px' }} />
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="inputProductAuthor">Tên tác giả (*)</label>
                          <select className="form-control" name="inputAuthorName" multiple

                          >
                            {
                              author.map((v, i) => {
                                return (
                                  <option key={i} value={v._id} >{ v.a_name }</option>
                                )
                              })
                            }
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="inputCompanyName">Nhà xuất bản (*)</label>
                          <select className="form-control" name="inputCompanyName"
                            onChange={updateProductFormik.handleChange}
                          >
                            {
                              productItem.company ? ( company.map((v, i) => {
                                return (
                                  <option key={i} value={v._id}
                                    selected={productItem.company._id === v._id ? true : false}  > { v.c_name} </option>
                                )
                              })) : ''
                            }
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="inputProductDescription">Mô tả sản phẩm</label>
                          <CKEditor
                            name="inputProductDescription"
                            editor={ClassicEditor}
                            data={updateProductFormik.values.inputProductDescription}
                            onChange={(e, editor) => {
                              updateProductFormik.setFieldValue("inputProductDescription", editor.getData())
                            }}
                          />
                          {/* {addProductFormik.errors.inputProductDescription && addProductFormik.touched.inputProductDescription && (
                            <small>{addProductFormik.errors.inputProductDescription}</small>
                          )} */}
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Cập nhật</button>
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

export default ProductEdit;
