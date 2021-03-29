import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import homeAPI from './../../apis/homeAPI';
import skt from './../../assets/images/banner-sach-ktkn.jpg';
import './CategoryDetail.css';
import ItemBook from '../../components/ItemBook/ItemBook';

const CategoryDetail = (props) => {
  const [cate, setCate] = useState({});
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const cateId = queryString.parse(props.location.search).cateid;
    homeAPI.getCateById(cateId).then((res) => {
      setCate(res.data.data);
    }).catch((err) => {
      console.log(err);
    });

    homeAPI.getBooksByCateId(cateId).then((res) => {
      setBooks(res.data.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [props.location.search]);
  return (
    <>
      <section className="breadcrumbbar">
        <div className="container">
          <ol className="breadcrumb mb-0 p-0 bg-transparent">
            <li className="breadcrumb-item"><Link to="/" >Trang chủ</Link></li>
            <li className="breadcrumb-item active"><a href="# ">{cate.c_name}</a></li>
          </ol>
        </div>
      </section>

      <section className="banner">
        <div className="container">
          <a href="# "><img src={skt} alt="banner-sach-ktkn" className="img-fluid" /></a>
        </div>
      </section>

      <section className="content my-4">
        <div className="container">
          <div className="noidung bg-white" style={{ width: '100%' }}>
            {/* header của khối sản phẩm : tag(tác giả), bộ lọc và sắp xếp  */}
            <div className="header-khoi-sp d-flex">
              <div className="tag">
                <label>Tác giả nổi bật:</label>
                <a href="# ">Tất cả</a>
                <a href="# " data-tacgia=".MarieForleo">Marie Forleo</a>
                <a href="# " data-tacgia=".DeanGraziosi">Dean Graziosi</a>
                <a href="# " data-tacgia=".DavikClark">Davik Clark</a>
                <a href="# " data-tacgia=".TSLêThẩmDương">TS Lê Thẩm Dương</a>
                <a href="# " data-tacgia=".SimonSinek">Simon Sinek</a>
              </div>
              <div className="sort d-flex ml-auto">
                <div className="hien-thi">
                  <label htmlFor="hienthi-select" className="label-select">Hiển thị</label>
                  <select className="hienthi-select">
                    <option value={30}>30</option>
                    <option value={60}>60</option>
                  </select>
                </div>
                <div className="sap-xep">
                  <label htmlFor="sapxep-select" className="label-select">Sắp xếp</label>
                  <select className="sapxep-select">
                    <option value="moinhat">Mới nhất</option>
                    <option value="thap-cao">Giá: Thấp - Cao</option>
                    <option value="cao-thap">Giá: Cao - Thấp</option>
                  </select>
                </div>
              </div>
            </div>
            {/* các sản phẩm  */}
            <div className="items">
              <div className="row">

                {books.map((v, i) => {
                  return (
                    <div className="col-lg-3 col-md-4 col-xs-6 item DeanGraziosi" key={i}>
                      <ItemBook info={v} />
                    </div>
                  )
                })}

              </div>
            </div>
            {/* pagination bar */}
            <div className="pagination-bar my-3">
              <div className="row">
                <div className="col-12">
                  <nav>
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <a className="page-link" href="# " aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item active"><a className="page-link" href="# ">1</a></li>
                      <li className="page-item"><a className="page-link" href="# ">2</a></li>
                      <li className="page-item">
                        <a className="page-link" href="# " aria-label="Next">
                          <span aria-hidden="true">›</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="# " aria-label="Next">
                          <span aria-hidden="true">»</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/*het khoi san pham*/}
          </div>
          {/*het div noidung*/}
        </div>
        {/*het container*/}
      </section>
    </>
  )
}

export default CategoryDetail;