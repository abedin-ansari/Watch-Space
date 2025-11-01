import React, { useMemo, useState, useCallback } from "react";
import { nthprime } from "../utils/Helper";

const Demo = () => {
  const [text, setText] = useState(0);

  // ⭐ useMemo: Memoizes the RESULT (the calculated prime number)
  // 
  // WHY IT'S IMPORTANT:
  // - Without useMemo: nthprime(text) runs on EVERY render (even if 'text' didn't change)
  // - With useMemo: Only calculates when 'text' changes (saves computation time)
  // - [text] means recalculate ONLY when 'text' value changes
  let prime = useMemo(() => nthprime(text), [text]); // ← Caches the result until 'text' changes

  // ⭐ useCallback: Memoizes the FUNCTION itself (not the result)
  // 
  // WHY IT'S IMPORTANT:
  // - Without useCallback: A new function is created on EVERY render (wasteful!)
  // - With useCallback: Same function reference is reused (saves memory & prevents unnecessary re-renders)
  // - Empty [] means this function NEVER changes (no dependencies)
  const handleInputChange = useCallback((e) => {
    setText(e.target.value);
  }, []); // ← Empty array = function is created ONCE and reused forever

  return (
    <div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter number"
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl">Prime Number: {prime}</h1>
      </div>
      
      {/* 
        📚 QUICK REFERENCE - useMemo vs useCallback:
        
        ⭐ useMemo (Memoizes VALUE/RESULT):
        ❌ WITHOUT useMemo:
        let prime = nthprime(text);
        → Calculates on EVERY render (even if 'text' didn't change!)
        
        ✅ WITH useMemo:
        let prime = useMemo(() => nthprime(text), [text]);
        → Only calculates when 'text' changes (efficient!)
        
        ⭐ useCallback (Memoizes FUNCTION):
        ❌ WITHOUT useCallback:
        onChange={(e) => setText(e.target.value)} 
        → New function created on EVERY render (wasteful!)
        
        ✅ WITH useCallback:
        onChange={handleInputChange}
        → Same function reused (efficient!)
        
        💡 REMEMBER:
        - useMemo → For expensive calculations (cache the RESULT)
        - useCallback → For functions passed as props (cache the FUNCTION)
      */}
    </div>
  );
};

export default Demo;
