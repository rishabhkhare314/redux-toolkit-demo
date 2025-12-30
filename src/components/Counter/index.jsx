import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../../store/slices/CounterSlice";

const Counter = () => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  return (
    <>
      <h1>{counter}</h1>
      <button className="counter-field" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="counter-field" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button className="counter-field" onClick={() => dispatch(reset())}>
        Reset
      </button>
      <input
        id="num-input"
        name="num-input"
        type="number"
        className="counter-field"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        onBlur={() => dispatch(incrementByAmount(Number(count)))}
      />
    </>
  );
};
export default Counter;
