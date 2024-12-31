import { useEffect, useState } from "react";

const UseEffect = () => {
  //koi manxe first time site ma auda or first time mount huda

  const [count, setCount] = useState(0);
  const [dcount, setDcount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setDcount(dcount - 1);
  };

  // useEffect(()=>{
  //     console.log("Welcome to site")
  // }, [])

  useEffect(() => {
    if (count != 0) {
      document.title = "Learning React";
      console.log("Welcome to site");
    }
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Click me +</button>
      <h1>{dcount}</h1>
      <button onClick={decreaseCount}>Click me -</button>
    </div>
  );
};

export default UseEffect;
