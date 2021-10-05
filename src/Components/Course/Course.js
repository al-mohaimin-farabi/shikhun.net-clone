import React from "react";
import { Container } from "react-bootstrap";
import CourseItems from "../CourseItems/CourseItems";
import GetData from "../Hooks/GetData";

const Course = () => {
  const [card] = GetData([]);
  //   console.log(card);
  return (
    <Container className="my-3">
      <h1 className="display-5 mb-4 text-secondary">All Courses</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
        {card.map((courseItem) => (
          <CourseItems
            key={courseItem.key}
            courseItem={courseItem}
          ></CourseItems>
        ))}
      </div>
    </Container>
  );
};

export default Course;
