import React from 'react';

export default function OnKeyDownExample() {
  function handleKeyDown(event) {
    console.log(`Você acionou a tecla ${event.key}`);
  }

  return (
    <input onKeyDown={handleKeyDown} />
  );
}
