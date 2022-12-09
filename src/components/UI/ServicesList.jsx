import React from "react";
import "../../styles/services-list.css";
import { Col } from "reactstrap";
import servicesData from "../../assets/data/serviceData.js";

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="section__item">
      <span className="mb-3 d-inline-block">
        <i class={item.icon} />
      </span>

      <h6> {item.title} </h6>
      <p className="section__decritpion"> {item.desc} </p>
    </div>
  </Col>
);

const ServicesList = () => {
  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

export default ServicesList;
