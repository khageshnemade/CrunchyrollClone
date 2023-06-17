import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-primary-subtle">
      <nav className="navbar navbar-expand-lg bg-primary-subtle">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://logowik.com/content/uploads/images/crunchyroll4133.jpg"
              alt=""
              className="brand-logo "
              style={{ width: "130px" }}
              class="b1"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/webseries.html" target="_blank">
                  TV Series
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/movie.html" target="_blank">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/populat.html" target="_blank">
                  Popular
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/what.html">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register.html" target="_blank">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success bg-light" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Navbar;
