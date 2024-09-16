import { useState } from "react";

export default function Title() {
  const [nome, setNome] = useState("Mundo");

  return (
    <div>
      <h1>Olá {nome}!</h1>

      <button onClick={() => setNome("José")}>Entrar</button>
    </div>
  );
}
