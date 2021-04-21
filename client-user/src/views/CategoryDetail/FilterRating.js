import React from 'react';

const FilterRating = () => {
  return (
    <div className="item-filter">
      <h6>ĐÁNH GIÁ</h6>
      <div className="rating-list">
        <a href="# ">
          <i className="fa fa-star active" />
          <i className="fa fa-star active" />
          <i className="fa fa-star active" />
          <i className="fa fa-star active" />
          <i className="fa fa-star active" />
          <span className="text">5 sao</span>
        </a>
        <a href="# " >
          <i className="fa fa-star active" />
          <i className="fa fa-star active" />
          <i className="fa fa-star active" />
          <i className="fa fa-star active" />
          <i className="fa fa-star" />
          <span className="text">4 sao</span>
        </a>
        <a href="# ">
          <i className="fa fa-star active" />
          <i className="fa fa-star active" />
          <i className="fa fa-star active" />
          <i className="fa fa-star " />
          <i className="fa fa-star " />
          <span className="text">3 sao</span>
        </a>
      </div>
      <hr />
    </div>
  )
}

export default FilterRating;
