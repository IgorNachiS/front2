import React from 'react';

export default function OnClickExample() {
  function handleClick(event) {
    console.log(`Você pressionou um ${event.target.tagName}!`);
  }

  return (
    <div>
      <div onClick={handleClick}><p>Clique-me</p></div>
      <button onClick={handleClick}>Clicar</button>
    </div>
  );
}
