import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "#",
    display: "Privay Policy",
  },
  {
    path: "/cars",
    display: "Cars Listing",
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

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
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

            <p className="footer__logo-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
              vel quod! Necessitatibus illo tempore natus, ipsa earum minus
              ducimus, temporibus rem quidem iusto eaque reprehenderit, numquam
              cumque deleniti laboriosam officiis.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links </h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">123 Zindabazar, Sylhet, Bangladesh</p>
              <p className="office__info">Phone : +123456789</p>
              <p className="office__info">Email : muhibish@gmail.com</p>
              <p className="office__info">Office TIme : 10AM -7PM </p>
            </div>
          </Col>
          <Col lg="3" md="4"  sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Newsletter</h5>
              <p className="section__decritpion ">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__decritpion d-flex align-items-center justify-content-center gap-1 pt-4 flex-wrap">
                <i class="ri-copyright-line"></i>
                Copyright {year}, Developed by
                <a href="https://github.com/Reqima-dev" target="_blank">
                  REQIMA.
                </a>
                All rights reservserd
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
