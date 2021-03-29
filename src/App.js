import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(100);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount(previousCount => previousCount + 1);
  const decrement2 = () => setCount(previousCount => previousCount - 1);

  return (
    <>
      <div>count: {count}
      </div>
      <div>
        <button onClick={increment}>BUTTON</button>
        <button onClick={decrement}>BUTTON</button>
      </div>
      <div>
        <button onClick={increment2}>BUTTON</button>
        <button onClick={decrement2}>BUTTON</button>
      </div>
    </>
  );
}

export default App;
