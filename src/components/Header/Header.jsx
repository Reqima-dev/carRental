import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu_active");

  return (
    <header className="header">
      {/* ==============Top============== */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +1-202-505-0149
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__right gap-3  ">
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i class="ri-logout-circle-line"></i>Login
                </Link>
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ==============MIDDLE============== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-3">
                    <i class="ri-car-line"></i>
                    <span>
                      Rent Car <br />
                      Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2 ">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Bangladesh</h4>
                  <h6>Sylhet City,Bangladesh </h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10AM - 7PM </h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className="d-flex align-items-center justify-content-end"
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ==============MAIN NAVIGATIOn============== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive
                        ? "nav__active nav__items"
                        : "nav__items"
                    }
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  {" "}
                  <i class="ri-search-line"></i>{" "}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
