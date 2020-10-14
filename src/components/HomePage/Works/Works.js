import React from "react";
import "./Works.css";
import { Col, Row, Carousel } from "react-bootstrap";
import caImg1 from '../../../resources/carousel/carousel-1.png';
import caImg2 from '../../../resources/carousel/carousel-2.png';
import caImg3 from '../../../resources/carousel/carousel-3.png';
import caImg4 from '../../../resources/carousel/carousel-4.png';
import caImg5 from '../../../resources/carousel/carousel-5.png';


const Works = () => {
  return (
    <div className="works-div">
      <h2 className="works-heading">
        Here are some of
        <span style={{ color: "rgba(122,178,89,1)" }}> our works</span>
      </h2>
      <div className="container">
      <Carousel>
        <Carousel.Item className="pb-5">
          <Row>
            <Col sm={6}>
              <img
              className="d-block img-fluid"
              src={caImg1}
              alt="First"
            />
            </Col>
            <Col sm={6}>
            <img
              className="d-block img-fluid"
              src={caImg2}
              alt="second"
            />
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item className="pb-5">
          <Row>
            <Col sm={6}>
            <img
              className="d-block img-fluid"
              src={caImg4}
              alt="third"
            />
            </Col>
            <Col sm={6}>
            <img
              className="d-block img-fluid"
              src={caImg5}
              alt="fourth"
            />
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item className="pb-5">
        <Row>
            <Col sm={6} className="long-img">
            <img
              className="d-block"
              src={caImg3}
              alt="fifth"
            />
            </Col>
          </Row>
        </Carousel.Item>

      </Carousel>
      </div>
    </div>
  );
};

export default Works;
