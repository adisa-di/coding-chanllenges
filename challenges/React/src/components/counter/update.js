import React, { useContext } from 'react';
import CountContext from './context';

function UpdateCount() {

  const { increment, decrement } = useContext(CountContext);

  return (
    <div>
       <button onClick={decrement}> Decrement </button>
       <button onClick={increment}> Increment </button>
    </div>
  )
}

export default UpdateCount;