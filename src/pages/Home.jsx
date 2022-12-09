import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindCardForm from "../components/UI/FindCardForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonials from "../components/UI/Testimonials";

import BlogList from "../components/UI/BlogList";
const Home = () => {
  return (
    <Helmet title="Home">
      {/* =========== HERO SECTION ===========*/}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>
              <Col lg="8" md="8" sm="12">
                <FindCardForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* =========== About SECTION ===========*/}
      <AboutSection />

      {/* =========== Services SECTION ===========*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* =========== CAR ITEMS OFFER SECTION ===========*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>

      {/* =========== Become a driver section ===========*/}
      <BecomeDriverSection />

      {/* =========== TESTIMONIALS section ===========*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our CLients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>
            <Testimonials />
          </Row>
        </Container>
      </section>
      {/* =========== BLOG section ===========*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our Blogs</h6>
              <h2 className="section__title">Latest BLogs</h2>
            </Col>
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
