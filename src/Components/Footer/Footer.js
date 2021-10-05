import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="border-bottom border-2">
          <Col>
            <h5 className="text-white ">শিখুন.নেট</h5>
            <p className="text-white mt-4 mb-1">সোশ্যাল লিংক</p>
            <div>
              <ul className="d-flex p-0">
                <li className="list-item ">
                  <Link to="#" className="text-decoration-none " href="#">
                    <i className="fab fa-facebook-square"></i>
                  </Link>
                </li>
                <li className="list-item ">
                  <Link to="#" className="text-decoration-none " href="#">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
                <li className="list-item ">
                  <Link to="#" className="text-decoration-none " href="#">
                    <i className="fab fa-instagram-square"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          {/* app download section */}
          <Col>
            <p className="text-white">আমাদের অ্যাপ ডাউনলোড করুন</p>
            <Link to="#">
              <img
                width="220px"
                className="img-fluid rounded"
                src="./images/play-store.png"
                alt=""
              />
            </Link>
            <Link to="#">
              <img
                width="220px"
                className="img-fluid"
                src="./images/apple-store.jpg"
                alt=""
              />
            </Link>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col className="text-center">
            <p className="fs-6 text-white">
              স্বত্ব © ২০১৫ - ২০২১ শিখুন.নেট কতৃক সর্বস্বত্ব সংরক্ষিত
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
