import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import "./AboutUs.css";

const AbouteUs = () => {
  return (
    <>
      <Container>
        <h4 className="display-6 mt-3">আমাদের সম্পর্কে</h4>
        <div>
          <p className="my-3">
            শিখুন.নেট ওয়েব ডেভেলপমেনন্ট শেখার জন‍্য একটি যোগ্য প্লাটফর্ম। আমাদের
            এখানে বেসিক থেকে শুরু করে এডভান্স টিউটোরিয়ালগুলো কোর্স আকারে
            পাবেন এবং এনরোল করে শেখা শুরু করতে পারবেন। কোন সমস‍্যায় পড়লে পাবেন
            কমিউনিটির বিশাল হেল্প।
          </p>

          <p>
            শিখুন.নেট এর সকল টিউটোরিয়াল অন্ত্যন্ত ভালো মানের এবং আগামীতে যত
            টিউটোরিয়াল আসবে সেগুলোও আন্তর্জাতিক মান বজায় রেখে তৈরি করা হবে।
            কোন কোর্স ভালো লাগলে রেটিং দিন, আপনার বন্ধুদের মধ‍্যে যারা ওয়েব
            ডেভেলপমেন্ট শিখতে আগ্রহী তাদের সাথে আমাদের সাইট শেয়ার করুন।
          </p>

          <p className="my-3 lh-lg lh-base">
            সমস্যার ক্ষেত্রে: ০৯৬১-২০০-১০১০
            <br />
            (সকাল ১০টা - রাত ১০টা)
            <br />
            অথবা মেসেজ করুন
            <br />
            10MSHelp To ২৬৯৬৯ (২৪x৭)
          </p>
        </div>
      </Container>
      <div className="footer-bottom">
        <Footer></Footer>
      </div>
    </>
  );
};

export default AbouteUs;
