import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={ ()=> navigate("/profile") }>Go to Profile Page</button>
        </div>
    );
}

export default HomePage;
