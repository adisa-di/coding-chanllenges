// refs
import React, { useRef } from 'react';


function FocusInput() {

  const inputEl = useRef(null);

  const focusInput = () => {
    inputEl.current.focus();
  }

  return (
    <div>
      <input ref={inputEl}/>
      <button onClick={focusInput}> Focus the input </button>
    </div>
  )
}


class FocusRef extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // creates a reference to the component
    this.focusButton = this.focusButton.bind(this);
  }

  focusButton() {
    this.myRef.current.focus();
  }

  render() {
    return (
      <div>
        <input ref={this.myRef} />
        <button onClick={this.focusButton}>Focus</button>
      </div>
    )
  }
}

export {
  FocusInput,
  FocusRef
}