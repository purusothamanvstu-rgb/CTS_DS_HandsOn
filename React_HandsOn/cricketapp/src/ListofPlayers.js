import React from 'react';

// Maps through all 11 players
export function ListofPlayers({ players }) {
    return (
        <div>
            {players.map((item, index) => (
                <li key={index}>Mr. {item.name} <span>{item.score}</span></li>
            ))}
        </div>
    );
}

// Uses arrow functions to filter players with scores <= 70
export function Scorebelow70({ players }) {
    let players70 = [];
    
    players.map((item) => {
        if (item.score <= 70) {
            players70.push(item);
        }
        return null; // map expects a return
    });

    return (
        <div>
            {players70.map((item, index) => (
                <li key={index}>Mr. {item.name} <span>{item.score}</span></li>
            ))}
        </div>
    );
}