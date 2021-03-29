import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu/Menu';
import homeAPI from '../../apis/homeAPI';

const Carousel = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    homeAPI.getBanners().then((res) => {
      setBanners(res.data.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <section className="header bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-3" style={{ marginRight: '-15px' }}>
            {/* CATEGORIES */}
            <Menu />
            {/* END CATEGORIES */}
          </div>

          {/* banner slider  */}
          <div className="col-md-9 px-0">
            <div id="carouselId" className="carousel slide" data-ride="carousel">
              <ol className="nutcarousel carousel-indicators rounded-circle">
                <li data-target="#carouselId" data-slide-to={0} className="active" />
                <li data-target="#carouselId" data-slide-to={1} />
                <li data-target="#carouselId" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                {banners.map((v, i) => {
                  return (
                    <div className={ i === 0 ? `carousel-item active`: 'carousel-item'} key={i}>
                      <a href="# "><img src={v.b_image.url} className="img-fluid" style={{ height: '386px' }} width="900px" alt="First slide" /></a>
                    </div>
                  )
                })}

              </div>
              <a className="carousel-control-prev" href="#carouselId" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselId" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel;
