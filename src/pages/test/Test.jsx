import { useState } from "react";

const Test = () => {
  // var count =0
  const name = "Bishal Rijal";
  const [count, setCount] = useState(0);
  const increaseNumber = () => {
    setCount(count + 1);
  };

  const decreaseNumber = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseNumber}>+</button>
      <button onClick={decreaseNumber}>-</button>
      <p>{name}</p>
    </div>
  );
};

export default Test;
