import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(100);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <div>count: {count}
      </div>
      <button onClick={increment}>BUTTON</button>
      <button onClick={decrement}>BUTTON</button>
    </>
  );
}

export default App;
