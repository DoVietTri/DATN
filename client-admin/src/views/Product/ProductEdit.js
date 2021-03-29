import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { errorToast, successToast } from '../../components/Toasts/Toasts';
import productAPI from './../../apis/productAPI';
import categoryAPI from './../../apis/categoryAPI';
import authorAPI from './../../apis/authorAPI';
import companyAPI from './../../apis/companyAPI';
import useFullPageLoader from './../../hooks/useFullPageLoader';

const ProductEdit = (props) => {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const history = useHistory();
  const [fileName, setFileName] = useState('Chọn ảnh');
  const [previewSource, setPreviewSource] = useState('');
  const [productItem, setProductItem] = useState({});
  const [cate, setCate] = useState([]);
  const [author, setAuthor] = useState([]);
  const [company, setCompany] = useState([]);
  const [authorId, setAuthorId] = useState([]);

  useEffect(() => {
    let id = props.match.params.id;
    showLoader();
    productAPI.getProductById(id).then((res) => {
      setProductItem(res.data.data);
      res.data.data.author.forEach(v => {
        setAuthorId([...authorId, v._id]);
      });
      hideLoader();
    }).catch((err) => {
      errorToast("Có lỗi xảy ra, vui lòng thử lại !");
    });

    categoryAPI.getAllCategories().then((res) => {
      setCate(res.data.data);
      hideLoader();
    }).catch((err) => {
      console.log(err);
    });

    authorAPI.getAllAuthors().then((res) => {
      setAuthor(res.data.data);
      hideLoader();
    }).catch((err) => {
      console.log(err);
    });

    companyAPI.getAllCompanies().then((res) => {
      setCompany(res.data.data);
      hideLoader();
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
      inputAuthorName: authorId,
      inputCompanyName: productItem.company ? productItem.company._id : '',
      inputProductDescription: productItem.p_description
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      inputCateName: Yup.string()
        .required("Bắt buộc chọn danh mục !"),
      inputProductName: Yup.string()
        .required("Bắt buộc nhập tên sản phẩm !")
        .max(255, "Tên sản phẩm quá dài, nhỏ hơn 255 kí tự !"),
      inputProductCode: Yup.string()
        .required("Bắt buộc nhập mã sản phẩm !")
        .max(100, "Mã sản phẩm quá dài, nhỏ hơn 100 kí tự"),
      inputProductPrice: Yup.number()
        .required("Bắt buộc  nhập giá sản phẩm !")
        .min(0, "Giá tiền lớn hơn 0"),
      inputProductQuantity: Yup.number()
        .required("Bắt buộc nhập số lượng sản phẩm !")
        .min(0, "Giá tiền lớn hơn 0"),
      inputAuthorName: Yup.array()
        .min(1, "Bắt buộc chọn tác giả"),
      inputCompanyName: Yup.string()
        .required("Bắt buộc chọn nhà  xuất bản !"),
      inputProductDatePublic: Yup.string()
        .required("Bắt buộc chọn ngày phát hành !")
    }),
    onSubmit: (values) => {
      let formData = new FormData();
      formData.append('p_name', values.inputProductName);
      formData.append('p_code', values.inputProductCode);
      formData.append('p_price', values.inputProductPrice);
      formData.append('p_quantity', values.inputProductQuantity);
      formData.append('p_datepublic', values.inputProductDatePublic);
      formData.append('p_image_detail', values.inputProductImage);
      formData.append('p_description', values.inputProductDescription);
      formData.append('category', values.inputCateName);
      for (let i = 0; i < values.inputAuthorName.length; i++) {
        formData.append("author[]", values.inputAuthorName[i]);
      }

      formData.append("company", values.inputCompanyName);

      showLoader();
      productAPI.updateProductById(props.match.params.id, formData).then((res) => {
        if (res.data.message === 'PRODUCT_NOT_FOUND') {
          hideLoader();
          errorToast("Sản phẩm không tồn tại");
        }
        if (res.data.message === 'DESTROY_IMAGE_FAILED') {
          hideLoader();
          errorToast("Xóa ảnh thất bại, kiểm tra đường truyền mạng");
        }

        if (res.data.message === 'UPLOAD_FAILED') {
          hideLoader();
          errorToast("Cập nhật ảnh thất bại, kiểm tra đường truyền mạng");
        }

        if (res.data.message === 'SUCCESS') {
          hideLoader();
          successToast("Cập nhật sản phẩm thành công !");
          history.push({ pathname: '/products' });
        }
      }).catch((err) => {
        hideLoader();
        errorToast("Có lỗi xảy ra, vui lòng thử lại");
      })
    }
  });

  let previewFile = (file) => {
    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSource(reader.result);
      }
    }
  }

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

                        <div className="row">
                          <div className="col-8">
                            <div className="form-group">
                              <label htmlFor="inputFile">Hình ảnh mới</label>
                              <div className="input-group">
                                <div className="custom-file">
                                  <input type="file" className="custom-file-input" name="inputProductImage"
                                    onChange={(e) => {
                                      updateProductFormik.setFieldValue('inputProductImage', e.target.files[0]);
                                      setFileName(e.target.files[0] ? e.target.files[0].name : 'Chọn ảnh');
                                      previewFile(e.target.files[0] ? e.target.files[0] : null);
                                    }}
                                  />
                                  <label className="custom-file-label" htmlFor="inputFile">{fileName}</label>
                                </div>
                                <div className="input-group-append">
                                  <span className="input-group-text">Upload</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            {previewSource && (
                              <img src={previewSource} style={{ height: '100px' }} alt="previewImage" className="img-thumbnail" />
                            )}
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
                            value={updateProductFormik.values.inputAuthorName || ['']}
                            onChange={updateProductFormik.handleChange}
                          >
                            {
                              author.map((v, i) => {
                                return (
                                  <option key={i} value={v._id} >{v.a_name}</option>
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
                              productItem.company ? (company.map((v, i) => {
                                return (
                                  <option key={i} value={v._id}
                                    selected={productItem.company._id === v._id ? true : false}  > { v.c_name} </option>
                                )
                              })) : ''
                            }
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
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
      
      {loader}
    </div>
  )
}

export default ProductEdit;
