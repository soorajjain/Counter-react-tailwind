import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div className="">
        <h1 className=" text-[40px] text-center mb-4 font-bold">{count}</h1>
        <button
          className="p-2 border border-black my-2 bg-red-500 hover:bg-red-400 text-white font-bold mx-3"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button
          className="p-2 border border-black my-2 bg-red-500 hover:bg-red-400 text-white font-bold mx-3"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
