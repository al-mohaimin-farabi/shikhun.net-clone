import { useEffect, useState } from "react";

const GetData = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  // console.log(card);
  // return necessary things
  return [card];
};

export default GetData;
