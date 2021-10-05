import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const CardItem = (props) => {
  const { title, Courselevel, img, totalEnrolled, Description, price } =
    props.item;
  const navigate = useHistory();
  const handleEnrole = () => {
    navigate.push(`/enrole`);
  };
  return (
    <div className="col">
      <div className="card h-100">
        <img width="100%" src={img} height="400" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-success">{title}</h5>
          <p className="card-text text-secondary">
            Course Level:{" "}
            <span className="text-primary fw-bold">{Courselevel}</span>
          </p>
          <p className="card-text text-secondary">
            Enrolled:{" "}
            <span className="text-primary fw-bold">{totalEnrolled}</span>
          </p>
          <p className="card-text text-secondary">ডেসক্রিপশন: {Description}</p>
          <small className="card-text text-secondary">
            পুরো ডিটেইলস‌্ দেখতে <Link to="/course">কোর্স সমূহ</Link> পেইজ ভিজিট
            করুন
          </small>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <h5>
            মূল্য: {price}
            <strong className="fs-3">৳</strong>
          </h5>
          <button
            onClick={handleEnrole}
            className="btn btn-dark text-white fw-bolder"
          >
            Enrole Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
