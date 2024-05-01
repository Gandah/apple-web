import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  const numOfDivs = Array.from({ length: 37 }, (_, i) => i + 1);

  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="relative w-[10vw] h-[10vw] rounded-full">
          <div className="socket">
            <div className="gel center-gel">
              <div className="circle"></div>
            </div>
           { numOfDivs.map((num, i) => (
            <div 
                key={`r${i}${num}`}
            className={`gel c${num} r${num < 7 ? 
            1 : num < 19 ? 2 : 3}`}>
              <div className="circle"></div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
