import React from 'react';
import { useParams } from 'react-router-dom';
import trainersMock from './trainersmock';

function TrainerDetail() {
    // Retrieve the 'id' parameter from the URL using the hook
    const { id } = useParams();
    
    // Query the mock data to find the matching trainer
    const trainer = trainersMock.find(t => t.trainerId === id);

    if (!trainer) {
        return <h2>Trainer not found!</h2>;
    }

    return (
        <div>
            <h2>Trainers Details</h2>
            <br />
            <h3>{trainer.name} ({trainer.technology})</h3>
            <br />
            <p style={{ fontSize: '1.2rem' }}>{trainer.email}</p>
            <br />
            <p style={{ fontSize: '1.2rem' }}>{trainer.phone}</p>
            <br />
            <ul>
                {trainer.skills.map((skill, index) => (
                    <li key={index} style={{ fontSize: '1.2rem' }}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default TrainerDetail;