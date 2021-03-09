import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import authorAPI from './../../apis/authorAPI';
import { errorToast, successToast } from '../../components/Toasts/Toasts';
import { FILE_SIZE, SUPPORTED_FORMATS } from './../../constants/constants';

const AuthorAdd = () => {

  const history = useHistory();

  let authorFormik = useFormik({
    initialValues: {
      inputAuthorName: '',
      inputAuthorImage: '',
      inputAuthorInfo: ''
    },
    validationSchema: Yup.object({
      inputAuthorName: Yup.string()
        .required("Bắt buộc nhập tên tác giả !")
        .max(100, "Tên quá dài, nhỏ hơn 100 kí tự"),
      inputAuthorImage: Yup.mixed()
        .required("Chưa có file ảnh")
        .test(
          "fileSize",
          "Kích thước file lớn, vui lòng chọn file khác nhỏ hơn 100 KB có định dạng là ảnh",
          value => value && value.size <= FILE_SIZE
        )
        .test(
          "fileFormat",
          "Không hỗ trợ loại file này, lòng chọn file ảnh",
          value => value && SUPPORTED_FORMATS.includes(value.type)
        )
    }),
    onSubmit: (values) => {
      let formData = new FormData();
      formData.append("a_name", values.inputAuthorName);
      formData.append("a_info", values.inputAuthorInfo);

      for (let i = 0; i < values.inputAuthorImage.length; i++) {
        formData.append("a_image", values.inputAuthorImage[i]);
      }

      authorAPI.addNewAuthor(formData).then((res) => {
        if (res.data.message === 'AUTHOR_EXISTS') {
          errorToast("Tác giả đã tồn tại");
        }
        if (res.data.message === 'UPLOAD_FAILED') {
          errorToast("Lỗi upload ảnh");
        }
        if (res.data.message === 'SUCCESS') {
          successToast("Thêm tác giả thành công");
          history.push({ pathname: '/authors' });
        }
      }).catch(err => {
        errorToast("Có lỗi xảy ra, vui lòng thử lại");
      }) 
    }
  });

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Thêm tác giả</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/dashboard">
                    Trang chủ
                            </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/authors" >
                    Tác giả
                            </Link>
                </li>
                <li className="breadcrumb-item active">Thêm tác giả</li>
              </ol>
            </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>

      <section className="content" >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-primary">

                <div className="card-header">
                  <h3 className="card-title">Thêm</h3>
                </div>

                <form onSubmit={authorFormik.handleSubmit}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6 col-sm-6">

                        <div className="form-group">
                          <label htmlFor="inputAuthorName">Tên tác giả (*)</label>
                          <input type="text" className="form-control" name="inputAuthorName" placeholder="Nhập tên tác giả..."
                            value={authorFormik.values.inputAuthorName}
                            onChange={authorFormik.handleChange}
                          />
                          {authorFormik.errors.inputAuthorName && authorFormik.touched.inputAuthorName && (
                            <small>{authorFormik.errors.inputAuthorName}</small>
                          )}
                        </div>

                        <div className="form-group">
                          <label htmlFor="inputAuthorImage">Hình ảnh (*) </label>
                          <div className="input-group">
                            <div className="custom-file">
                              <input type="file" className="custom-file-input" name="inputAuthorImage" multiple
                                onChange={(e) => authorFormik.setFieldValue('inputAuthorImage', e.target.files)}
                              />
                              <label className="custom-file-label" htmlFor="inputAuthorImage">Chọn file</label>
                            </div>
                            <div className="input-group-append">
                              <span className="input-group-text">Tải lên</span>
                            </div>
                          </div>
                          {authorFormik.errors.inputAuthorImage && authorFormik.touched.inputAuthorImage && (
                            <small>{authorFormik.errors.inputAuthorImage}</small>
                          )}
                        </div>

                      </div>

                      <div className="col-6 col-sm-6">
                        <div className="form-group">
                          <label htmlFor="inputAuthorInfo">Thông tin tác giả</label>
                          <textarea className="form-control" name="inputAuthorInfo"
                            rows={6}
                            value={authorFormik.values.inputAuthorInfo}
                            onChange={authorFormik.handleChange}
                          />
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

export default AuthorAdd;
