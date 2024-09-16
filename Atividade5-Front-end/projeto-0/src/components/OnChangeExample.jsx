import React from 'react';

export default function OnChangeExample() {
  function handleChange(event) {
    console.log(`Você mudou para ${event.target.value}!`);
  }

  return (
    <div>
      <input onChange={handleChange} />
      <textarea onChange={handleChange} />
      <select onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
}
