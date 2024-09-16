
import React from 'react';

const SecondComponent  = () => {

    const teams = [
        { id: 1, nome: 'Barcelona', país: 'Espanha' },
        { id: 2, nome: 'Manchester United', país: 'Inglaterra' },
        { id: 3, nome: 'Bayern de Munique', país: 'Alemanha' },
        { id: 4, nome: 'Juventus', país: 'Itália' },
        { id: 5, nome: 'Paris Saint-Germain', país: 'França' }
    ];


    const sortedTeams = [...teams].sort((a, b) => a.id - b.id);

    const alphabeticallySortedTeams = [...teams].sort((a, b) => a.nome.localeCompare(b.nome));

    return (
        <div>
            <h2>Times Ordenados por ID:</h2>
            <ol>
                {sortedTeams.map(team => (
                    <li key={team.id}>
                        Nome: {team.nome}, País: {team.país}
                    </li>
                ))}
            </ol>

            <h2>Times Em Ordem Alfabética:</h2>
            <ul>
                {alphabeticallySortedTeams.map(team => (
                    <li key={team.id}>
                        Nome: {team.nome}, País: {team.país}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SecondComponent;