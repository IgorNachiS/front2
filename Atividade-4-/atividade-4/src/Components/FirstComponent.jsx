import React from 'react';

const FirstComponent = () => {
   
    const nome = "Artur";
    const sobrenome = "Pereira";
    const matricula = "2314290019";
    const nomeProfessor = "Felipe";
    const nomeDisciplina = "Construção de Front-End";

    return (
        <div>
            <h1>{nome} {sobrenome}</h1>
            <p>Matrícula: {matricula}</p>
            <p>Professor: {nomeProfessor}</p>
            <p>Disciplina: {nomeDisciplina}</p>
        </div>
    );
};

export default FirstComponent;