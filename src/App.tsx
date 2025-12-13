import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* 1. 타이포그래피 */}
      <div className="text-xs font-thin text-red-200">text-xs</div>
      <div className="text-sm font-extrabold text-indigo-400">text-sm</div>
      <div className="text-lg font-extralight text-cyan-500">text-lg</div>
      <div className="text-xl font-bold text-amber-300">text-xl</div>
      <div className="text-2xl font-black text-emerald-700">text-2xl</div>
      <div className="text-[13px] text-[rgb(0,255,255)]">text-13px</div>

      {/* 2. 배경색 */}
      <div className="bg-amber-100">bg-amber-100</div>

      {/* 3. 사이즈 */}
      <div className="w-full bg-red-500">box</div>
      <div className="w-[70px] bg-green-500">box</div>
      <div className="w-20 bg-blue-500">box</div>

      <div className="h-full bg-yellow-500">box</div>
      <div className="h-[70px] bg-violet-500">box</div>
      <div className="h-20 bg-sky-500">box</div>

      {/* 4. 여백 */}
      <div className="h-50 w-50 bg-red-300 p-5">
        <div className="h-full w-full bg-blue-400"></div>
      </div>

      <div className="m-5 h-50 w-50 bg-emerald-300 p-5">
        <div className="h-full w-full bg-purple-400"></div>
      </div>
    </div>
  );
}

export default App;
