import React, { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      <h2>Counter App</h2>
      <p className="count">Count: {count}</p>

      <div className="btn-group">
        <button className="btn increment" onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <button className="btn reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}
