import React from 'react';

// ES6 Destructuring: Grabbing specific indexes (1st, 3rd, 5th)
export function OddPlayers([first, , third, , fifth]) {
    return (
        <div>
            <li>First : {first}</li>
            <li>Third : {third}</li>
            <li>Fifth : {fifth}</li>
        </div>
    );
}

// ES6 Destructuring: Grabbing specific indexes (2nd, 4th, 6th)
export function EvenPlayers([ , second, , fourth, , sixth]) {
    return (
        <div>
            <li>Second : {second}</li>
            <li>Fourth : {fourth}</li>
            <li>Sixth : {sixth}</li>
        </div>
    );
}

// ES6 Array Merging using the Spread Operator
const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
export const IndianPlayersList = [...T20Players, ...RanjiTrophyPlayers];

export function ListofIndianPlayers({ IndianPlayers }) {
    return (
        <div>
            {IndianPlayers.map((item, index) => (
                <li key={index}>Mr. {item}</li>
            ))}
        </div>
    );
}