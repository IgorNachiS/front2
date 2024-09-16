import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  useEffect(() => {
    const form = document.querySelector("form");
    const devolver_1= document.querySelector("#devolver-1")
    const devolver_2 = document.querySelector("#devolver-2");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = document.querySelector("#inNome").value;
      const matricula = document.querySelector("#inMatricula").value;

      const primeiraResposta = document.querySelector(
        "input[name='q1']:checked"
      );
      const segundaResposta = document.querySelector(
        "input[name='q2']:checked"
      );
      const terceiraResposta = document.querySelector(
        "input[name='q3']:checked"
      );
      const quartaResposta = document.querySelector(
        "input[name='q4']:checked"
      );
      const quintaResposta = document.querySelector(
        "input[name='q5']:checked"
      );

      const respostasCorretas = {
        q1: "q1a",
        q2: "q2b",
        q3: "q3a",
        q4: "q4d",
        q5: "q5c",
      };

      const verificarResposta = (resposta, grupo) => {
        if (resposta) {
          return resposta.id === respostasCorretas[grupo]
            ? "Resposta Certa"
            : "Resposta Errada";
        }
        return "Nenhuma resposta selecionada";
      };

 

      let resultado = "";
      resultado += `Pergunta 1: ${verificarResposta(primeiraResposta, "q1")}\n`;
      resultado += `Pergunta 2: ${verificarResposta(segundaResposta, "q2")}\n`;
      resultado += `Pergunta 3: ${verificarResposta(terceiraResposta, "q3")}\n`;
      resultado += `Pergunta 4: ${verificarResposta(quartaResposta, "q4")}\n`;
      resultado += `Pergunta 5: ${verificarResposta(quintaResposta, "q5")}`;

      devolver_1.innerText = `Nome: ${nome} | Matrícula: ${matricula}`;
      devolver_2.innerText = resultado;
    });
  }, []);

  return (
    <>
      <div>
        <h1>Formulario</h1>
        <form>
          <p>Nome:</p>
          <input type="text" id="inNome" />

          <p>Matricula:</p>
          <input type="number" id="inMatricula" />

          <p>
            Pergunta 1: Verdadeiro ou Falso <br />
            CSS Flexbox é uma técnica que permite criar layouts de página web mais complexos e responsivos com facilidade.
          </p>
          <div>
            <p>
              a.
              <input type="radio" name="q1" id="q1a" />
              Verdadeiro
            </p>
            <p>
              b.
              <input type="radio" name="q1" id="q1b" />
              Falso
            </p>
          </div>

          <p>
            Pergunta 2: Múltipla Escolha <br />
            Qual dos seguintes seletores CSS seleciona todos os elementos <strong>p</strong> dentro de um elemento com a classe .container?
          </p>
          <div>
            <p>
              a.
              <input type="radio" name="q2" id="q2a" />
              container p
            </p>
            <p>
              b.
              <input type="radio" name="q2" id="q2b" />
              .container p
            </p>
            <p>
              c.
              <input type="radio" name="q2" id="q2c" />
              p.container
            </p>
            <p>
              d.
              <input type="radio" name="q2" id="q2d" />
              p .container
            </p>
          </div>

          <p>
            Pergunta 3: Múltipla Escolha <br />
            Qual é a diferença principal entre as tags <strong>&lt;section&gt;</strong> e <strong>&lt;div&gt;</strong> no HTML5?
          </p>
          <div>
            <p>
              a.
              <input type="radio" name="q3" id="q3a" />
              &lt;section&gt; é usada para criar seções de conteúdo que têm um significado semântico, enquanto &lt;div&gt; é um contêiner genérico sem significado semântico.
            </p>
            <p>
              b.
              <input type="radio" name="q3" id="q3b" />
              &lt;section&gt; e &lt;div&gt; têm o mesmo propósito e podem ser usadas de forma intercambiável.
            </p>
            <p>
              c.
              <input type="radio" name="q3" id="q3c" />
              &lt;div&gt; é usada exclusivamente para layout, enquanto &lt;section&gt; é usada apenas para documentos de texto.
            </p>
            <p>
              d.
              <input type="radio" name="q3" id="q3d" />
              &lt;section&gt; não pode ser usada dentro de uma &lt;div&gt;.
            </p>
          </div>

          <p>
            Pergunta 4: Múltipla Escolha <br />
            Qual é a função do hook <strong>useState</strong> em React?
          </p>
          <div>
            <p>
              a.
              <input type="radio" name="q4" id="q4a" />
              Fornecer um contexto global para todos os componentes.
            </p>
            <p>
              b.
              <input type="radio" name="q4" id="q4b" />
              Gerenciar o ciclo de vida de um componente.
            </p>
            <p>
              c.
              <input type="radio" name="q4" id="q4c" />
              Executar efeitos colaterais após renderizações.
            </p>
            <p>
              d.
              <input type="radio" name="q4" id="q4d" />
             Gerenciar o estado local dentro de um componente funcional.
            </p>
          </div>

          <p>
            Pergunta 5: Múltipla Escolha <br />
            Qual das seguintes propriedades CSS é usada para definir a cor de fundo de um elemento?
          </p>
          <div>
            <p>
              a.
              <input type="radio" name="q5" id="q5a" />
              border-color
            </p>
            <p>
              b.
              <input type="radio" name="q5" id="q5b" />
              color
            </p>
            <p>
              c.
              <input type="radio" name="q5" id="q5c" />
              background-color
            </p>
            <p>
              d.
              <input type="radio" name="q5" id="q5d" />
              text-color
            </p>
          </div>

          <input type="submit" value="Enviar" />
        </form>

         <h3  id ="devolver-1"></h3>
        <h3 id="devolver-2"></h3>
      </div>
    </>
  );
}

export default App;
