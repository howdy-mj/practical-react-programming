import React, { useState } from 'react';
import WidthPrinter from './WidthPrinter';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* 카운터가 0일 때만 width가 보임 */}
      {count === 0 && <WidthPrinter />}
      <button onClick={() => setCount(count + 1)}>증가</button>
    </>
  );
}
