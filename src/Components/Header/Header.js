import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Spring } from "react-spring";
import "./Header.css";

const Header = () => {
  // navbar section start

  return (
    <Spring
      from={{ opacity: 0, marginTop: -5000 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {(props) => (
        <div style={props} className="animate">
          <Navbar bg="dark" variant="dark">
            <Container>
              <NavLink className="navbar-brand" to="/home">
                শিখুন.নেট
              </NavLink>
              <Nav className="me-auto">
                <NavLink
                  className="nav-link nav-animation"
                  to="/home"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#FF284F",
                  }}
                >
                  হোম
                </NavLink>
                <NavLink
                  className="nav-link nav-animation"
                  to="/course"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#FF284F",
                  }}
                >
                  কোর্স সমূহ
                </NavLink>
                <NavLink
                  className="nav-link nav-animation"
                  to="/tranding-courses"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#FF284F",
                  }}
                >
                  ট্রেন্ডিং কোর্স
                </NavLink>
                <NavLink
                  className="nav-link nav-animation"
                  to="/aboute-us"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#FF284F",
                  }}
                >
                  আমাদের সম্পর্কে
                </NavLink>
              </Nav>
            </Container>
          </Navbar>
        </div>
      )}
    </Spring>
  );
};

export default Header;
