import React from "react";
import { Link } from "react-router-dom";
import "./Enrole.css";

const Enrole = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 mt-5 pt-5 col-sm-offset-1  text-center">
              <h1 className="text-center  ">&#129309;</h1>
              <div className="enrole-success-bg"></div>
              <div className="contant_box_404">
                <h3 className="h2">Enrolment Successed</h3>

                <Link to="/home" className="link_404 fw-bold text-dark">
                  Go Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enrole;
