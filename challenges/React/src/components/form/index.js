import React, { useState } from 'react';

function Input() {

  const [texts, setTexts] = useState([]);
  const [text, setText] = useState('');

  const submitText = (event) => {
    event.preventDefault();
    setTexts(prev => [...prev, text]);
  }

  const removeItem = (item) => {
    setTexts(list => list.filter(ele => ele !== item));
  }

  return (
    <div>
      <form onSubmit={(e) => submitText(e)}>
        <label>
          Text:
          <input type="text" name="text" onChange={(e) => setText(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <ul>
          {texts.map((item, idx) => {
            return (
              <div key={idx}>
                <li key={idx}>{item}</li>
                <button onClick={() => removeItem(item)}>Remove</button>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default Input;