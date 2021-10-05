import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  // navbar section start
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="navbar-brand" to="/home">
          শিখুন.নেট
        </NavLink>
        <Nav className="me-auto">
          <NavLink
            className="nav-link"
            to="/home"
            activeStyle={{
              fontWeight: "bold",
              color: "#FF284F",
            }}
          >
            হোম
          </NavLink>
          <NavLink
            className="nav-link"
            to="/course"
            activeStyle={{
              fontWeight: "bold",
              color: "#FF284F",
            }}
          >
            কোর্স সমূহ
          </NavLink>
          <NavLink
            className="nav-link"
            to="/tranding-courses"
            activeStyle={{
              fontWeight: "bold",
              color: "#FF284F",
            }}
          >
            ট্রেন্ডিং কোর্স
          </NavLink>
          <NavLink
            className="nav-link"
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
  );
};

export default Header;
