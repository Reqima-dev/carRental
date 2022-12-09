import React from "react";
import "../../styles/testimoanials.css";
import Slider from "react-slick";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__decritpion">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut
          molestiae maxime asperiores nemo, odit amet eum quasi doloremque
          repudiandae perferendis in blanditiis recusandae exercitationem
          reprehenderit illum accusantium vero quaerat.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="ava01" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__decritpion">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__decritpion">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut
          molestiae maxime asperiores nemo, odit amet eum quasi doloremque
          repudiandae perferendis in blanditiis recusandae exercitationem
          reprehenderit illum accusantium vero quaerat.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="ava01" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Stephania Gomez</h6>
            <p className="section__decritpion">UI/UX Design</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__decritpion">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut
          molestiae maxime asperiores nemo, odit amet eum quasi doloremque
          repudiandae perferendis in blanditiis recusandae exercitationem
          reprehenderit illum accusantium vero quaerat.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="ava01" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Adlou Reqima</h6>
            <p className="section__decritpion">MERN DEVELOPPER</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__decritpion">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut
          molestiae maxime asperiores nemo, odit amet eum quasi doloremque
          repudiandae perferendis in blanditiis recusandae exercitationem
          reprehenderit illum accusantium vero quaerat.
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="ava01" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Ariane Steimetz</h6>
            <p className="section__decritpion">Web designer </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
