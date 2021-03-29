import React from 'react';

const TabEvaluate = () => {
  return (
    <div className="tab-pane fade" id="nav-danhgia" role="tabpanel" aria-labelledby="nav-danhgia-tab">
      <div className="row">
        <div className="col-md-3 text-center">
          <p className="tieude">Đánh giá trung bình</p>
          <div className="diem">0/5</div>
          <div className="sao">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <p className="sonhanxet text-muted">(0 nhận xét)</p>
        </div>
        <div className="col-md-5">
          <div className="tiledanhgia text-center">
            <div className="motthanh d-flex align-items-center">5 <i className="fa fa-star" />
              <div className="progress mx-2">
                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
              </div> 0%
            </div>
            <div className="motthanh d-flex align-items-center">4 <i className="fa fa-star" />
              <div className="progress mx-2">
                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
              </div> 0%
            </div>
            <div className="motthanh d-flex align-items-center">3 <i className="fa fa-star" />
              <div className="progress mx-2">
                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
              </div> 0%
            </div>
            <div className="motthanh d-flex align-items-center">2 <i className="fa fa-star" />
              <div className="progress mx-2">
                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
              </div> 0%
            </div>
            <div className="motthanh d-flex align-items-center">1 <i className="fa fa-star" />
              <div className="progress mx-2">
                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
              </div> 0%
            </div>

            <div className="btn vietdanhgia mt-3">Viết đánh giá của bạn</div>
          </div>
          {/* nội dung của form đánh giá  */}
          <div className="formdanhgia">
            <h6 className="tieude text-uppercase">GỬI ĐÁNH GIÁ CỦA BẠN</h6>
            <span className="danhgiacuaban">Đánh giá của bạn về sản phẩm này:</span>
            <div className="rating d-flex flex-row-reverse align-items-center justify-content-end">
              <input type="radio" name="star" id="star1" /><label htmlFor="star1" />
              <input type="radio" name="star" id="star2" /><label htmlFor="star2" />
              <input type="radio" name="star" id="star3" /><label htmlFor="star3" />
              <input type="radio" name="star" id="star4" /><label htmlFor="star4" />
              <input type="radio" name="star" id="star5" /><label htmlFor="star5" />
            </div>
            <div className="form-group">
              <input type="text" className="txtFullname w-100" placeholder="Mời bạn nhập tên(Bắt buộc)" />
            </div>
            <div className="form-group">
              <input type="text" className="txtEmail w-100" placeholder="Mời bạn nhập email(Bắt buộc)" />
            </div>
            <div className="form-group">
              <input type="text" className="txtComment w-100" placeholder="Đánh giá của bạn về sản phẩm này" />
            </div>
            <div className="btn nutguibl">Gửi bình luận</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabEvaluate;
