import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainersList from './Trainerlist';
import TrainerDetail from './TrainerDetails';

function App() {
    return (
        <BrowserRouter>
            <div style={{ fontFamily: 'sans-serif', margin: '20px' }}>
                
                <h1 style={{ fontSize: '3rem' }}>My Academy Trainers App</h1>
                
                {/* Navigation Menu */}
                <div style={{ fontSize: '1.3rem', margin: '20px 0' }}>
                    <Link to="/">Home</Link> | <Link to="/trainers">Show Trainers</Link>
                </div>
                
                {/* Route Definitions */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/trainers" element={<TrainersList />} />
                    {/* Dynamic route to catch the ID parameter */}
                    <Route path="/trainers/:id" element={<TrainerDetail />} />
                </Routes>
                
            </div>
        </BrowserRouter>
    );
}

export default App;