import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="counter-container">
      <div><p>Counter</p></div>
      <p>{count}</p>
      <button onClick={increment}> Increment</button>
      <button onClick={decrement}> Decrement </button>
    </div>
  );
};

export default Counter;
