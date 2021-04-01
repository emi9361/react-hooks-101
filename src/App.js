import React, { useEffect, useState } from 'react';
const App = props => {
  const [state, setState] = useState(props);
  const { name, price } = state

  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate')
  })

  useEffect(() => {
    console.log('This is like componentDidMount')
  }, [])

  useEffect(() => {
    return console.log('This callback is for name only')
  }, [price])

  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>+1</button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({ ...state, name: e.target.value })} />
    </>
  );
}
App.defaultProps = {
  name: '',
  price: 1000
}

export default App;

// useStateは複数のオブジェクトを１つに持つことができる
// const [state, setState] = useState(props)
// 分割代入↓　これすると、returnに長い文字列を短縮できる
// const { name, price } = state
