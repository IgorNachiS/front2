import React, { useState } from 'react';

export default function ClickExample() {
  const [nome, setNome] = useState('');

  function handleClick(texto, event) {
    setNome(texto);
    console.log("Clicou!", event);
  }

  return (
    <div>
      <button onClick={(event) => handleClick('José', event)}>Clicar</button>
      <p>Nome: {nome}</p>
    </div>
  );
}
