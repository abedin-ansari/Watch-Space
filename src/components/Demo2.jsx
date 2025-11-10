import React, { useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(1);
  let x = 10;

  const z = useRef(20); // Ref is like an object with a current property

  return (
    <div className="className=m-4 p-2 border border-black w-96 h-96">
      <div>
        <button
          className="p-2 m-4 bg-green-400"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase X
        </button>
        <span className="font-bold text-xl">Let = {x}</span>
      </div>
      <div>
        <button
          className="p-2 m-4 bg-green-400"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">State = {y}</span>
      </div>
      <div>
        <button
          className="p-2 m-4 bg-green-400"
          onClick={() => {
            z.current = z.current + 1;
            console.log(z.current);
          }}
        >
          Increase Z
        </button>
        <span className="font-bold text-xl">Ref = {z.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
