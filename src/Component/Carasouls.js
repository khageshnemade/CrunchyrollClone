import React from "react";

function Carasouls() {
  return (
    <div>
      <div>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a
                href="https://www.youtube.com/watch?v=89JWRYEIG-s"
                target="_blank"
              >
                <img
                  src="https://images4.alphacoders.com/473/47374.png"
                  className="d-block w-100"
                  alt="..."
                />
              </a>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <a
                href="https://www.youtube.com/watch?v=wHAaKXtfSOg&pp=ygUZZHJhZ29uIGJhbGwgc3VwZXIgdHJhaWxlcg%3D%3D"
                target="_blank"
              >
                <img
                  src="https://images8.alphacoders.com/632/632011.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </a>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <a
                href="https://www.youtube.com/watch?v=e8YBesRKq_U"
                target="_blank"
              >
                <img
                  src="https://images8.alphacoders.com/440/440445.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </a>

              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <a
                href="https://www.youtube.com/watch?v=O6qVieflwqs"
                target="_blank"
              >
                <img
                  src="https://images6.alphacoders.com/127/1275245.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </a>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
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
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carasouls;
