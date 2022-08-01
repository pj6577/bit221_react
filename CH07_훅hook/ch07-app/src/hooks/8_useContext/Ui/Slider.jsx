import React from 'react';

const Slider = () => {
  return (
    <>
      <div id="carouselExampleIndicators" classNameName="carousel slide" data-bs-ride="true">
  <div classNameName="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" classNameName="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://item.kakaocdn.net/do/98504002fd1d2e1db2fe8e6eb34160489f5287469802eca457586a25a096fd31" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://item.kakaocdn.net/do/f9984cf1f9a820ed27ce249f34046c22616b58f7bf017e58d417ccb3283deeb3" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://cdn.crowdpic.net/detail-thumb/thumb_d_2F583E5543F7E19139C6FCFFBF9607A6.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
};

export default Slider;