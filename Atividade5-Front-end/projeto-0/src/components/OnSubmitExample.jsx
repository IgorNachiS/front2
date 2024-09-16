import React, { useState } from 'react';

export default function OnSubmitExample() {
  const [nome, setNome] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Um nome foi enviado: ${nome}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>
      <input type="submit" value="Enviar" />
    </form>
  );
}
