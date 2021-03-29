import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(100);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount(previousCount => previousCount + 1);
  const decrement2 = () => setCount(previousCount => previousCount - 1);
  const reset = () => setCount(0);
  const double = () => setCount(count * 2);
  const third = () => setCount(count % 3 == 0 ? count / 3 : count);

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
      <div>
        <button onClick={reset}>BUTTON</button>
        <button onClick={double}>BUTTON</button>
      </div>
      <div>
        <button onClick={third}>BUTTON</button>

      </div>
    </>
  );
}

export default App;
