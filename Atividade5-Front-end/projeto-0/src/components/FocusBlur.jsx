import React, { useState } from 'react';

const FocusBlurExample = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>React onFocus and onBlur Example</h2>
      <input
        type="text"
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Click or tab to focus"
        style={{
          padding: '10px',
          fontSize: '16px',
          border: isFocused ? '2px solid green' : '1px solid gray',
        }}
      />
      <div style={{ marginTop: '20px' }}>
        {isFocused ? <p>The input is focused!</p> : <p>The input is not focused.</p>}
      </div>
      <p>Input value: {inputValue}</p>
    </div>
  );
};

export default FocusBlurExample;

