import React from 'react';
import { Link } from 'react-router-dom';
import trainersMock from './trainersmock';

function TrainersList() {
    return (
        <div>
            <h2>Trainers List</h2>
            <ul>
                {trainersMock.map(trainer => (
                    <li key={trainer.trainerId} style={{ marginBottom: '10px' }}>
                        {/* Define a link that passes the trainer ID into the URL */}
                        <Link to={`/trainers/${trainer.trainerId}`} style={{ fontSize: '1.2rem', color: 'blue' }}>
                            {trainer.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TrainersList;