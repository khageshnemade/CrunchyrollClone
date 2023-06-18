import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function MyNavigationLinks() {
  // let navigate = useNavigate();

  // const logOutAction = () => {
  //   localStorage.removeItem("loginStatus");
  //   navigate("/login", { replace: true });
  // };

  // Assistance of LocalStorage
  // let loginStatus = localStorage.getItem("loginStatus");
  // if (!loginStatus) {
  //   return <></>;
  // }

  return (
    <>
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
                  <Nav.Link as={Link} to={"/home"}>
                    Home
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link as={Link} to={"/ws"}>
                    Webseries
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link as={Link} to={"/ms"}>
                    Movies
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link as={Link} to={"/ws2"}>
                    Popular
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link as={Link} to={"/about"}>
                    About
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link as={Link} to={"/fb"}>
                    Feedback
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link as={Link} to={"/qu"}>
                    Show Queries
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link as={Link} to={"/signup"}>
                    LogOut
                  </Nav.Link>
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
    </>
  );
}

export default MyNavigationLinks;
