import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="Main">
      <h1>Button Click Counter</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default App;
