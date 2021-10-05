import React from "react";
import { Container } from "react-bootstrap";
import GetData from "../Hooks/GetData";
import CourseItems from "../CourseItems/CourseItems";
const Tranding = () => {
  const [card] = GetData([]);
  return (
    <Container className="my-3">
      <h4 className="display-5 mb-4 text-secondary">Tranding Courses</h4>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
        {/* tranding section item loop */}
        {card.slice(2, 7).map((courseItem) => (
          <CourseItems
            key={courseItem.key}
            courseItem={courseItem}
          ></CourseItems>
        ))}
      </div>
    </Container>
  );
};

export default Tranding;
