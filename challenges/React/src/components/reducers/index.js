import React, { useReducer } from "react";

const initState = {count: 0};

// lazy initialization 
function init(initCount) {
  return {count: initCount};
}

function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: action.payload }
    default:
      return state;
  }
}

function ReduceCount() {

  // set up the reducer
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <div onClick={() => dispatch({ type: 'increment'})}>Increase</div>
      <div>{state.count}</div>
      <div onClick={() => dispatch({ type: 'decrement' })}>Decrease</div>
    </div>
  )
}


function AnotherCount({ initCount }) {

  const [state, dispatch] = useReducer(reducer, initCount, init);

  return (
    <div>
      <div onClick={() => dispatch({ type: 'increment'})}>Increase</div>
      <div>{state.count}</div>
      <div onClick={() => dispatch({ type: 'decrement' })}>Decrease</div>
      <div onClick={() => dispatch({ type: 'reset', payload: initCount })}> Reset </div>
    </div>
  )

}

export { ReduceCount, AnotherCount }