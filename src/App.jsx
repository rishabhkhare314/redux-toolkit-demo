import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./store/slices/CounterSlice";

function App() {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  return (
    <div className="root">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        onBlur={() => dispatch(incrementByAmount(Number(count)))}
      />
    </div>
  );
}

export default App;
