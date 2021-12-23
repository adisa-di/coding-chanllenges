import React, { useState } from 'react';
import UpdateCount from './update';
import CountContext from './context';

function Counter() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <CountContext.Provider value={{ increment, decrement }}>
      <div>{count}</div>
      <UpdateCount/>
    </CountContext.Provider>
  )

}

export default Counter;