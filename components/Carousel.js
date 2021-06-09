import { useEffect } from "react";

const Carousel = ({ visible = false }) => {
  let interval = 999999;

  return (
    <>
      {visible && (
        <div
          id="carouselExampleControls"
          className="carousel slide fullscreen"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={interval}>
              <img src="img/Slide1.jpg" className="d-block w-100" />
            </div>
            <div className="carousel-item" data-bs-interval={interval}>
              <img src="img/Slide2.jpg" className="d-block w-100" />
            </div>
            <div className="carousel-item" data-bs-interval={interval}>
              <img src="img/Slide3.jpg" className="d-block w-100" />
            </div>
            <div className="carousel-item" data-bs-interval={interval}>
              <img src="img/Slide4.jpg" className="d-block w-100" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Carousel;
