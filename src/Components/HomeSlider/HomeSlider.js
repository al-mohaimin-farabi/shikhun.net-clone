import { Carousel, Row } from "react-bootstrap";

import React from "react";

const HomeSlider = () => {
  return (
    <Row className="my-5">
      <Carousel>
        <Carousel.Item>
          <img
            style={{
              filter: "brightness(70%)",
            }}
            className="d-block w-100"
            src="./images/data2.jpg"
            alt="First slide"
            height="450"
          />
          <Carousel.Caption>
            <h3>বেসিক পিএইচপি</h3>
            <p>
              এই কোর্সে আমরা একদম বেসিক থেকে পিএইচপি শুরু করবো, তারপর আস্তে
              আস্তে এডভান্স শিখবো। আমাদের টার্গেট লারাভেল শেখা।
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              filter: "brightness(70%)",
            }}
            className="d-block w-100"
            src="./images/data1.jpg"
            alt="Second slide"
            height="450"
          />

          <Carousel.Caption>
            <h3>বেসিক জাভাস্ক্রীপ্ট থেকে শুরু করে রিএক্ট ফ্রেমওয়ার্ক</h3>
            <p>
              এই কোর্সে আমরা একদম বেসিক থেকে জাভাস্ক্রীপ্ট শুরু করবো, তারপর
              আস্তে আস্তে এডভান্স শিখবো। আমাদের টার্গেট রিএক্ট শেখা।
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              filter: "brightness(70%)",
            }}
            className="d-block w-100"
            src="./images/data3.jpg"
            alt="Third slide"
            height="450"
          />

          <Carousel.Caption>
            <h3>শপিফাই থিম ডেভেলপমেন্ট</h3>
            <p>
              এই কোর্সটিতে শপিফাই থিম ডেভেলপমেন্ট একেবারে বেসিক থেকে দেখানো
              হয়েছে।
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              filter: "brightness(70%)",
            }}
            className="d-block w-100"
            src="./images/data4.jpg"
            alt="Third slide"
            height="450"
          />

          <Carousel.Caption>
            <h3>এলিমেন্টর পেজবিল্ডার ও উকমার্স থিম ডেভেলপমেন্ট</h3>
            <p>
              যারা এলিমেন্টর পেজ বিল্ডার এবং উকমার্স শিখতে চান তাদের জন‍্য এটি
              একটি চমৎকার কোর্স।
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              filter: "brightness(70%)",
            }}
            className="d-block w-100"
            src="./images/data5.jpg"
            alt="Third slide"
            height="450"
          />

          <Carousel.Caption>
            <h3>Complete Web development course with jhankar mahbub</h3>
            <p>
              একদম জিরো থেকে, কোন প্রকার পূর্ব অভিজ্ঞতা ছাড়াই একজন প্রফেশনাল
              ওয়েব ডেভেলপার হওয়ার জন্য যা যা লাগবে তার সবকিছুই সহজ করে গিলিয়ে
              খাওয়ানো হবে এই কোর্সে।
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Row>
  );
};

export default HomeSlider;
