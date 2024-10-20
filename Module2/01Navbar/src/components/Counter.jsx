import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/actions/counterActions";
import AnotherCounter from "./anotherCounter";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div className="counter-container">
        <h1>Counter : {count}</h1>
        <button className="btn" onClick={() => dispatch(increment())}>INCREASE</button>
        <button className="btn" onClick={() => dispatch(decrement())}>DECREASE</button>
        <AnotherCounter />
      </div>
    </>
  );
};

export default Counter;
