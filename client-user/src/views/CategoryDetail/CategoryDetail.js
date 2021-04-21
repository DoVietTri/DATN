import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import homeAPI from './../../apis/homeAPI';
import skt from './../../assets/images/banner-sach-ktkn.jpg';
import './CategoryDetail.css';
import ItemBook from '../../components/ItemBook/ItemBook';
import FilterPrice from './FilterPrice';
import FilterRating from './FilterRating';

const CategoryDetail = (props) => {

  const [cate, setCate] = useState({});

  //all books
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const cateId = queryString.parse(props.location.search).cateid;
    homeAPI.getCateById(cateId).then((res) => {
      setCate(res.data.data);
    }).catch((err) => {
      console.log(err);
    });

    homeAPI.getBooksByCateId(cateId).then((res) => {
      let data = res.data.data;
      setBooks(data);
    }).catch((err) => {
      console.log(err);
    });

    window.scrollTo(0, 0);
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
              <h6>TẤT CẢ SÁCH</h6>
            </div>
            {/* các sản phẩm  */}
            <div className="row">
              <div className="col-12 col-md-3 col-sm-3">
                <h5 style={{ paddingTop: '10px', textAlign: 'center' }} >CHẾ ĐỘ LỌC</h5>

                <FilterPrice />

                <FilterRating />

                <div className="item-filter">
                  <h6>TÁC GIẢ</h6>
                  <hr />
                </div>

                <div className="item-filter">
                  <h6>NHÀ XUẤT BẢN</h6>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" />
                      <label className="form-check-label" htmlFor="defaultCheck2"> Nhà XB Kim Đồng </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" />
                      <label className="form-check-label" htmlFor="defaultCheck2"> Nhà XB Kim Đồng </label>
                    </div>
                  </div>
                  <hr />
                </div>

              </div>
              <div className="col-12 col-md-9 col-sm-9">
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
              </div>
            </div>
            {/* pagination bar */}
            <div className="pagination-bar my-3">
              <div className="row">
                <div className="col-12 ">
              
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
