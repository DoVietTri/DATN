import React from 'react';
import { Link } from 'react-router-dom';
import formatCurrency from 'format-currency';

const ItemBook = ({ info }) => {
  return (
    <div className="card">
      <Link to={`/categories/${info.category.c_slug}.html?pid=${info._id}&p_slug=${info.p_slug}`} className="motsanpham" style={{ textDecoration: 'none', color: 'black' }} data-toggle="tooltip" data-placement="bottom" title={info.p_name}>
        <img className="card-img-top anh" src={ info.p_image_detail.url } alt="item book" />
        <div className="card-body noidungsp mt-3">
          <h3 className="card-title ten">{ info.p_name }</h3>
          <small className="tacgia text-muted">
            { info.author.map((v, i) => {
              return (
                <span key={i}>
                  { `${v.a_name}  -` } 
                </span>
              )
            }) }
          </small>
          <div className="gia d-flex align-items-baseline">
            <div className="giamoi">{formatCurrency(info.p_price) } ₫</div>
            {/* <div className="giacu text-muted">139.000 ₫</div> */}
            <div className="sale">-20%</div>
          </div>
          <div className="danhgia">
            <ul className="d-flex" style={{ listStyle: 'none' }}>
              <li className="active"><i className="fa fa-star" /></li>
              <li className="active"><i className="fa fa-star" /></li>
              <li className="active"><i className="fa fa-star" /></li>
              <li className="active"><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><span className="text-muted">0 nhận xét</span></li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ItemBook
