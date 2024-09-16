import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FocusBlurExample from './components/FocusBlur'
import EventS from './components/Event'
import  UseComponent  from './components/UseComponent'
import ClickExample from './components/ClickExample';
import OnClickExample from './components/OnClickExample';
import OnChangeExample from './components/OnChangeExample';
import OnKeyDownExample from './components/OnKeyDownExample';
import OnSubmitExample from './components/OnSubmitExample';


function App() {
  return (
    <div className='App'>
      <h1>Exemplos de Eventos em React</h1>
      
      <div className="component-container">
        <h2>Exemplo de Foco e Desfoque</h2>
        <FocusBlurExample />
      </div>

      <div className="component-container">
        <h2>Exemplo de Evento</h2>
        <EventS />
      </div>

      <div className="component-container">
        <h2>Exemplo de Uso de Componentes</h2>
        <UseComponent />
      </div>

      <div className="component-container">
        <h2>Exemplo de Click</h2>
        <ClickExample />
      </div>

      <div className="component-container">
        <h2>Exemplo de OnClick</h2>
        <OnClickExample />
      </div>

      <div className="component-container">
        <h2>Exemplo de OnChange</h2>
        <OnChangeExample />
      </div>

      <div className="component-container">
        <h2>Exemplo de OnKeyDown</h2>
        <OnKeyDownExample />
      </div>

      <div className="component-container">
        <h2>Exemplo de OnSubmit</h2>
        <OnSubmitExample />
      </div>
    </div>
  );
}


export default App
