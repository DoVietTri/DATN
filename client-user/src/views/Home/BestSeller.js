import React from 'react';
import image1 from './../../assets/images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg';
import image2 from './../../assets/images//ma-bun-luu-manh.jpg';
import image3 from './../../assets/images/bank-4.0.jpg';
import image4 from './../../assets/images/bo-sach-500-cau-chuyen-dao-duc.jpg'


const BestSeller = () => {
  return (
    <section className="_1khoi sachmoi bg-white">
      <div className="container">
        <div className="noidung" style={{ width: '100%' }}>

          <div className="row">
            {/*header*/}
            <div className="col-12 d-flex justify-content-between align-items-center pb-2 bg-transparent pt-4">
              <h1 className="header text-uppercase" style={{ fontWeight: 400 }}>SÁCH BÁN CHẠY</h1>
              <a href="sach-moi-tuyen-chon.html" className="btn btn-warning btn-sm text-white">Xem tất cả</a>
            </div>
          </div>
          <div className="khoisanpham" style={{ paddingBottom: '2rem' }}>

            {/* 1 san pham */}
            <div className="card">
              <a href="Lap-trinh-ke-hoach-kinh-doanh-hieu-qua.html" className="motsanpham" style={{ textDecoration: 'none', color: 'black' }} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
                <img className="card-img-top anh" src={image1} alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                <div className="card-body noidungsp mt-3">
                  <h3 className="card-title ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h3>
                  <small className="tacgia text-muted">Brian Finch</small>
                  <div className="gia d-flex align-items-baseline">
                    <div className="giamoi">111.200 ₫</div>
                    <div className="giacu text-muted">139.000 ₫</div>
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
              </a>
            </div>

            <div className="card">
              <a href="Ma-bun-luu-manh-va-nhung-cau-chuyen-khac-cua-nguyen-tri.html" className="motsanpham" style={{ textDecoration: 'none', color: 'black' }} data-toggle="tooltip" data-placement="bottom" title="Ma Bùn Lưu Manh Và Những Câu Chuyện Khác Của Nguyễn Trí">
                <img className="card-img-top anh" src={image2} alt="ma-bun-luu-manh" />
                <div className="card-body noidungsp mt-3">
                  <h3 className="card-title ten">Ma Bùn Lưu Manh Và Những Câu Chuyện Khác Của Nguyễn
                      Trí</h3>
                  <small className="tacgia text-muted">Nguyễn Trí</small>
                  <div className="gia d-flex align-items-baseline">
                    <div className="giamoi">68.000 ₫</div>
                    <div className="giacu text-muted">85.000 ₫</div>
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
              </a>
            </div>

            <div className="card">
              <a href="/" className="motsanpham" style={{ textDecoration: 'none', color: 'black' }} data-toggle="tooltip" data-placement="bottom" title="Bank 4.0 - Giao dịch mọi nơi, không chỉ là ngân hàng">
                <img className="card-img-top anh" src={image3} alt="bank-4.0" />
                <div className="card-body noidungsp mt-3">
                  <h3 className="card-title ten">Bank 4.0 - Giao dịch mọi nơi, không chỉ là ngân hàng
                    </h3>
                  <small className="tacgia text-muted">Brett King</small>
                  <div className="gia d-flex align-items-baseline">
                    <div className="giamoi">111.200 ₫</div>
                    <div className="giacu text-muted">139.000 ₫</div>
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
              </a>
            </div>

            <div className="card">
              <a href="/" className="motsanpham" style={{ textDecoration: 'none', color: 'black' }} data-toggle="tooltip" data-placement="bottom" title="Bộ Sách 500 Câu Chuyện Đạo Đức - Những Câu Chuyện
                        Tình Thân (Bộ 8 Cuốn)">
                <img className="card-img-top anh" src={image4} alt="bo-sach-500-cau-chuyen-dao-duc" />
                <div className="card-body noidungsp mt-3">
                  <h3 className="card-title ten">Bộ Sách 500 Câu Chuyện Đạo Đức - Những Câu Chuyện
                      Tình Thân (Bộ 8 Cuốn)</h3>
                  <small className="tacgia text-muted">Nguyễn Hạnh - Trần Thị Thanh Nguyên</small>
                  <div className="gia d-flex align-items-baseline">
                    <div className="giamoi">111.200 ₫</div>
                    <div className="giacu text-muted">139.000 ₫</div>
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
              </a>
            </div>

            <div className="card">
              <a href="/" className="motsanpham" style={{ textDecoration: 'none', color: 'black' }} data-toggle="tooltip" data-placement="bottom" title="Bộ Sách 500 Câu Chuyện Đạo Đức - Những Câu Chuyện
                        Tình Thân (Bộ 8 Cuốn)">
                <img className="card-img-top anh" src={image4} alt="bo-sach-500-cau-chuyen-dao-duc" />
                <div className="card-body noidungsp mt-3">
                  <h3 className="card-title ten">Bộ Sách 500 Câu Chuyện Đạo Đức - Những Câu Chuyện
                      Tình Thân (Bộ 8 Cuốn)</h3>
                  <small className="tacgia text-muted">Nguyễn Hạnh - Trần Thị Thanh Nguyên</small>
                  <div className="gia d-flex align-items-baseline">
                    <div className="giamoi">111.200 ₫</div>
                    <div className="giacu text-muted">139.000 ₫</div>
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
              </a>
            </div>


            <div className="card">
              <a href="Ma-bun-luu-manh-va-nhung-cau-chuyen-khac-cua-nguyen-tri.html" className="motsanpham" style={{ textDecoration: 'none', color: 'black' }} data-toggle="tooltip" data-placement="bottom" title="Ma Bùn Lưu Manh Và Những Câu Chuyện Khác Của Nguyễn Trí">
                <img className="card-img-top anh" src={image2} alt="ma-bun-luu-manh" />
                <div className="card-body noidungsp mt-3">
                  <h3 className="card-title ten">Ma Bùn Lưu Manh Và Những Câu Chuyện Khác Của Nguyễn
                      Trí</h3>
                  <small className="tacgia text-muted">Nguyễn Trí</small>
                  <div className="gia d-flex align-items-baseline">
                    <div className="giamoi">68.000 ₫</div>
                    <div className="giacu text-muted">85.000 ₫</div>
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSeller;
