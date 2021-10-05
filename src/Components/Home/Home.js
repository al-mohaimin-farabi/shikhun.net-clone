// import React, { createContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardItem from "../Card/CardItem";
import GetData from "../Hooks/GetData";
import HomeSlider from "../HomeSlider/HomeSlider";
// export const CardContext = createContext();
const Home = () => {
  const [card] = GetData([]);
  // console.log(card);
  return (
    // <CardContext.Provider value={[card]}>
    <Container>
      <Row className="d-flex mt-3 align-items-center">
        <Col>
          <h1
            style={{
              fontSize: "44px",
              fontWeight: "600",
              marginTop: "15px",
              lineHeight: "60px",
            }}
          >
            <span
              style={{
                color: "#FF284F",
                fontSize: "44px",
              }}
            >
              ঘরে বসে
            </span>{" "}
            দক্ষতা অর্জনের <br /> সহজ সমাধান
          </h1>
          <p className="fs-5 mt-4">ঘড়ে বসে আয় করুন</p>
          <p className="fs-5 mt-0">চাকরি জীবনের জন্য পাবে স্পেশাল কোর্স</p>
        </Col>
        <Col className="justify-self-stretch;">
          <img
            height="400"
            className="ms-5 mt-1"
            src="./images/undraw_Designer_re_5v95.svg"
            alt=""
          />
        </Col>
      </Row>

      {/* shows the slider with 5 img */}
      <HomeSlider></HomeSlider>

      <h1 className="display-6 my-3">Best Courses For You</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
        {card.slice(0, 4).map((item) => (
          <CardItem key={Math.random() * 1000} item={item}></CardItem>
        ))}
      </div>
    </Container>
    // </CardContext.Provider>
  );
};

export default Home;
