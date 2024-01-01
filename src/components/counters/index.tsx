"use client";

import {
  setDecrement,
  setIncrement,
  setReset,
} from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Counter = () => {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col items-center">
      <h1 className="bg-cyan-300 text-black w-72 h-36 flex justify-center items-center text-5xl rounded-lg mb-8">
        {value}
      </h1>

      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(setDecrement())}
          className="w-36 h-10 text-center text-xl bg-red-400 rounded-md"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(setIncrement())}
          className="w-36 h-10 text-center text-xl bg-blue-600 rounded-md"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(setReset())}
          className="w-36 h-10 text-center text-xl bg-red-800 rounded-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
