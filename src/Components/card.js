import React, { useEffect } from "react";

const Card = (props) => {
//   useEffect(() => {
//     console.log("data", props.data);
//   }, []);

  return (
    <div>
      {props.data.map((el) => {
        <h1>{el.title}</h1>;
      })}
    </div>
  );
};

export default Card;
